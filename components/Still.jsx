import Image from "next/image";
import { frame } from "@/lib/frames";

// A still from one of the spec ads, at its real shape, with an optional caption.
export default function Still({ id, caption, sizes = "(min-width: 1024px) 30vw, 90vw", priority = false, ink = false, className = "" }) {
  const f = frame(id);
  return (
    <figure className={className}>
      <div className="relative overflow-hidden bg-ink" style={{ aspectRatio: f.ratio }}>
        <Image src={f.src} alt={f.alt} fill sizes={sizes} priority={priority} className="object-cover" />
      </div>
      {caption && (
        <figcaption className={`mt-3 border-t pt-2.5 text-[15px] leading-snug ${ink ? "border-rule-ink text-on-ink" : "border-rule text-graphite"}`}>
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
