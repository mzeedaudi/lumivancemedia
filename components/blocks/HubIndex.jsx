import Image from "next/image";
import Link from "next/link";
import { frame } from "@/lib/frames";
import { isPhoto, photo } from "@/lib/photos";
import { page } from "@/lib/pages";

// A hub page's index: a grid of tiles, each with a still, the page's name and
// one line about it. Two pages lie on their side so the row stays full.
// Column spans on a 12-column grid, so every row is full: four across, with
// a short last row stretched (seven pages become four over three).
const SPAN = { 3: "lg:col-span-3", 4: "lg:col-span-4", 6: "lg:col-span-6", 12: "lg:col-span-12" };
function spans(n) {
  const r = n % 4;
  if (r === 0) return Array(n).fill(3);
  if (r === 3) return [...Array(n - 3).fill(3), 4, 4, 4];
  if (r === 2) return [...Array(n - 2).fill(3), 6, 6];
  // One left over: three across instead.
  return n % 3 === 0 ? Array(n).fill(4) : [...Array(n - 2).fill(4), 6, 6];
}

export default function HubIndex({ keys }) {
  const side = keys.length <= 2;
  const s = spans(keys.length);
  return (
    <ul className={`grid gap-3 sm:grid-cols-2 lg:gap-4 ${side ? "" : "lg:grid-cols-12"}`}>
      {keys.map((key, i) => {
        const p = page(key);
        const f = isPhoto(p.thumb) ? photo(p.thumb) : frame(p.thumb);
        return (
          <li key={key} className={side ? undefined : SPAN[s[i]]}>
            <Link href={p.href} className={`tile group flex h-full overflow-hidden ${side ? "flex-col sm:flex-row" : "flex-col"}`}>
              <div className={`relative overflow-hidden bg-frame ${side ? "aspect-[4/3] sm:aspect-auto sm:min-h-[220px] sm:w-[42%] sm:flex-none" : "aspect-[4/3]"}`}>
                <Image src={f.src} alt="" fill sizes="(min-width: 1024px) 290px, (min-width: 640px) 45vw, 90vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
              </div>
              <div className={`flex flex-1 flex-col ${side ? "p-6 lg:p-7" : "p-5"}`}>
                <span className="h3 transition-colors group-hover:text-accent">{p.name}</span>
                <span className="mt-1.5 flex-1 text-[15px] leading-snug text-graphite">{p.summary}</span>
                <span className="link mt-3 text-[15px]">
                  Learn more <span aria-hidden="true">›</span>
                </span>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
