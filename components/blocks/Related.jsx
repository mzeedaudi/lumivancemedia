import Image from "next/image";
import Link from "next/link";
import { frame } from "@/lib/frames";
import { page } from "@/lib/pages";

// Where to go next: other pages, each with a still and one line.
export default function Related({ keys }) {
  return (
    <ul className="border-t border-ink">
      {keys.map((key) => {
        const p = page(key);
        const f = frame(p.thumb);
        return (
          <li key={key} className="border-b border-rule">
            <Link href={p.href} className="group grid grid-cols-[64px_1fr_auto] items-center gap-4 py-4 sm:grid-cols-[96px_1fr_auto] sm:gap-6">
              <div className="relative aspect-square overflow-hidden bg-ink">
                <Image src={f.src} alt="" fill sizes="96px" className="object-cover" />
              </div>
              <div>
                <span className="h3 block text-[19px] transition-colors group-hover:text-tally sm:text-[22px]">{p.name}</span>
                <span className="mt-1 block text-[15px] leading-snug text-graphite sm:text-[16px]">{p.summary}</span>
              </div>
              <span aria-hidden="true" className="font-mono text-[18px] transition-colors group-hover:text-tally">
                →
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
