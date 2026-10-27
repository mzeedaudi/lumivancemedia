import Image from "next/image";
import { photo } from "@/lib/photos";

// One of the AI illustrations from lib/photos.js, at its real 4:5 shape.
export default function Photo({ id, caption, sizes = "(min-width: 1024px) 30vw, 90vw", priority = false, className = "" }) {
  const ph = photo(id);
  return (
    <figure className={className}>
      <div className="relative aspect-[4/5] overflow-hidden bg-frame">
        <Image src={ph.src} alt={ph.alt} fill sizes={sizes} priority={priority} className="object-cover" />
      </div>
      {caption && <figcaption className="meta mt-2.5">{caption}</figcaption>}
    </figure>
  );
}
