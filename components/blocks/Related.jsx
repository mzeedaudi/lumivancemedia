import Image from "next/image";
import Link from "next/link";
import { frame } from "@/lib/frames";
import { page } from "@/lib/pages";

// Where to go next: a few other pages, each with a still and one line.
export default function Related({ keys }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-3 lg:gap-4">
      {keys.map((key) => {
        const p = page(key);
        const f = frame(p.thumb);
        return (
          <li key={key}>
            <Link href={p.href} className="tile group flex h-full items-center gap-4 p-4">
              <div className="relative aspect-square w-[72px] flex-none overflow-hidden rounded-xl bg-frame">
                <Image src={f.src} alt="" fill sizes="72px" className="object-cover" />
              </div>
              <div>
                <span className="h3 block text-[17px] transition-colors group-hover:text-accent">{p.name}</span>
                <span className="meta mt-1 block">{p.summary}</span>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
