import Image from "next/image";
import Link from "next/link";
import { frame } from "@/lib/frames";
import { page } from "@/lib/pages";

// A hub page's index: one row per page, with a still, its name and one line
// about it. Reads like a contents page rather than a wall of cards.
export default function HubIndex({ keys }) {
  return (
    <ul className="border-t border-rule">
      {keys.map((key) => {
        const p = page(key);
        const f = frame(p.thumb);
        return (
          <li key={key} className="border-b border-rule">
            <Link href={p.href} className="group grid grid-cols-[88px_1fr] items-center gap-x-4 gap-y-1 py-5 sm:grid-cols-[132px_minmax(0,0.9fr)_minmax(0,1.1fr)_20px] sm:gap-x-6">
              <div className="relative row-span-2 overflow-hidden bg-frame sm:row-span-1" style={{ aspectRatio: "4 / 3" }}>
                <Image src={f.src} alt="" fill sizes="(min-width: 640px) 132px, 88px" className="object-cover" />
              </div>
              <span className="display text-[21px] transition-colors group-hover:text-accent sm:text-[25px]">{p.name}</span>
              <span className="text-[15px] leading-snug text-graphite sm:text-[16px]">{p.summary}</span>
              <span aria-hidden="true" className="hidden text-[18px] transition-colors group-hover:text-accent sm:block">
                →
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
