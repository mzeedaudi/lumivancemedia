import Still from "@/components/Still";
import { frame } from "@/lib/frames";

// Stills from the spec ads in an even grid. Landscape frames take two cells.
export default function Gallery({ items }) {
  return (
    <ul className="grid grid-flow-row-dense grid-cols-2 items-start gap-x-3 gap-y-6 sm:grid-cols-3 lg:grid-cols-4 lg:gap-x-4">
      {items.map((it) => {
        const wide = frame(it.id).ratio !== "3 / 4";
        return (
          <li key={it.id} className={wide ? "col-span-2" : "col-span-1"}>
            <Still id={it.id} caption={it.caption} sizes={wide ? "(min-width: 1024px) 600px, 90vw" : "(min-width: 1024px) 300px, 50vw"} />
          </li>
        );
      })}
    </ul>
  );
}
