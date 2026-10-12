import Image from "next/image";
import { ads } from "@/lib/site";
import { frame } from "@/lib/frames";

// One ad as a contact sheet: six stills with their timestamps, so a reader can
// see how fifteen seconds are built without pressing play. `dense` keeps
// portrait frames in two rows of three for narrower columns.
export default function FrameStrip({ slug, dense = false }) {
  const landscape = ads[slug].ratio !== "3 / 4";
  const cols = landscape ? "grid-cols-2 sm:grid-cols-3" : dense ? "grid-cols-3" : "grid-cols-3 sm:grid-cols-6";
  return (
    <ol className={`grid gap-2 sm:gap-3 ${cols}`}>
      {[1, 2, 3, 4, 5, 6].map((n) => {
        const f = frame(`${slug}-${n}`);
        return (
          <li key={n}>
            <div className="relative overflow-hidden bg-frame" style={{ aspectRatio: f.ratio }}>
              <Image
                src={f.src}
                alt={n === 1 ? f.alt : `The same ad at ${f.at}`}
                fill
                sizes={landscape ? "(min-width: 1024px) 300px, 50vw" : "(min-width: 1024px) 200px, 33vw"}
                className="object-cover"
              />
            </div>
            <span className="mt-1 block text-[12px] tabular-nums text-graphite">{f.at}</span>
          </li>
        );
      })}
    </ol>
  );
}
