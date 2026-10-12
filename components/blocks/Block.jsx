// A page section, in one of two shapes so neighbors don't look alike:
// "side" puts the heading in a left column with the content beside it;
// "stack" puts the heading on top with the content below. `narrow` keeps
// stacked text content at a readable width.
export default function Block({ id, title, intro, layout = "stack", narrow = false, children }) {
  if (layout === "side") {
    return (
      <section id={id} className="wrap">
        <div className="grid-12 gap-y-8 border-t border-rule py-14 lg:py-20">
          <div className="col-span-12 lg:col-span-4">
            {title && <h2 className="display h2">{title}</h2>}
            {intro && <p className="mt-4 text-graphite">{intro}</p>}
          </div>
          <div className="col-span-12 lg:col-span-7 lg:col-start-6">{children}</div>
        </div>
      </section>
    );
  }

  return (
    <section id={id} className="wrap">
      <div className="border-t border-rule py-14 lg:py-20">
        {(title || intro) && (
          <div className="max-w-[720px]">
            {title && <h2 className="display h2">{title}</h2>}
            {intro && <p className="mt-4 text-graphite">{intro}</p>}
          </div>
        )}
        <div className={`${title || intro ? "mt-9" : ""} ${narrow ? "max-w-[820px]" : ""}`}>{children}</div>
      </div>
    </section>
  );
}
