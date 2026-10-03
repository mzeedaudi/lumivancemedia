import { Lines } from "@/components/Tally";

// Inner-page header. The label hangs in the gutter and the title sits on the
// content column, the same scaffold every homepage section uses.
export default function PageHeader({ eyebrow, title, intro }) {
  return (
    <header className="wrap grid-12 pb-12 pt-12 lg:pb-16 lg:pt-20">
      <div className="gut">
        <span className="label text-graphite">{eyebrow}</span>
      </div>
      <div className="body">
        <h1 className="display h2">
          <Lines>{title}</Lines>
        </h1>
        {intro && <p className="lede mt-5 max-w-measure text-graphite">{intro}</p>}
      </div>
    </header>
  );
}
