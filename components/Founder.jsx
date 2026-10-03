import Image from "next/image";
import { founder } from "@/lib/site";

// The founder in their own words. Until a real photo and name are set in
// lib/site.js, the page shows a marked photo slot and "The founder".
export default function Founder() {
  const [first, ...rest] = founder.story;
  return (
    <div className="grid items-end gap-8 sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] sm:gap-10">
      <figure className="w-full max-w-[340px]">
        {founder.photo ? (
          <div className="relative aspect-[4/5] overflow-hidden bg-ink">
            <Image src={founder.photo} alt={founder.name ? `${founder.name}, ${founder.role} of Lumivance` : "The founder of Lumivance"} fill sizes="340px" className="object-cover" />
          </div>
        ) : (
          <div className="flex aspect-[4/5] items-end border border-ink bg-[repeating-linear-gradient(135deg,transparent_0_9px,rgba(21,19,15,0.07)_9px_10px)] p-4">
            <span className="label text-graphite">Founder photo to come</span>
          </div>
        )}
      </figure>
      <div>
        <p className="text-[clamp(22px,2.2vw,30px)] italic leading-[1.25]">“{first}”</p>
        {rest.map((p) => (
          <p key={p} className="mt-4 max-w-[560px] text-graphite">
            {p}
          </p>
        ))}
        <p className="label mt-7 border-t border-ink pt-3">
          {founder.name ? `${founder.name} · ` : ""}
          {founder.role}, Lumivance
        </p>
      </div>
    </div>
  );
}
