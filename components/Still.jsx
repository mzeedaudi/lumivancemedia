import Image from "next/image";
import { frame } from "@/lib/frames";

// A still from one of the spec ads, at its real shape, with an optional caption.
export default function Still({ id, caption, sizes = "(min-width: 1024px) 30vw, 90vw", priority = false, className = "" }) {
  const f = frame(id);
  return (
    <figure className={className}>
      <div className="relative overflow-hidden bg-frame" style={{ aspectRatio: f.ratio }}>
        <Image src={f.src} alt={f.alt} fill sizes={sizes} priority={priority} className="object-cover" />
      </div>
      {caption && <figcaption className="meta mt-2.5">{caption}</figcaption>}
    </figure>
  );
}
