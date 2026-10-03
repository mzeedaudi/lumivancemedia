import Still from "@/components/Still";
import { frame } from "@/lib/frames";

// Drops by position (from 640px up) so the set reads as a loose spread, not a grid.
const DROP = ["", "sm:mt-14", "sm:mt-6", "sm:mt-10", "", "sm:mt-16"];

// A staggered set of stills from the spec ads. Landscape frames take two cells.
export default function Gallery({ items, ink = false }) {
  return (
    <ul className="grid grid-flow-row-dense grid-cols-2 items-start gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6">
      {items.map((it, i) => {
        const wide = frame(it.id).ratio !== "3 / 4";
        return (
          <li key={it.id} className={`${wide ? "col-span-2" : "col-span-1"} ${DROP[i % DROP.length]}`}>
            <Still id={it.id} caption={it.caption} ink={ink} sizes={wide ? "(min-width: 1024px) 600px, 90vw" : "(min-width: 1024px) 300px, 50vw"} />
          </li>
        );
      })}
    </ul>
  );
}
