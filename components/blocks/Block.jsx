// A page section, set the way Apple sets them: the headline on top, with the
// intro beside it on wide screens, and the content full width underneath.
// Sections alternate white and light grey by themselves (see .band in
// globals.css), so no rules are needed between them. `compact` is for
// one-line sections. `layout` and `narrow` are accepted for older callers and
// no longer change anything.
export default function Block({ id, title, intro, compact = false, children }) {
  return (
    <section id={id} className="band">
      <div className={`wrap ${compact ? "py-7 lg:py-8" : "py-12 lg:py-16"}`}>
        {(title || intro) && (
          <div className="grid gap-x-12 gap-y-3 lg:grid-cols-2 lg:items-end">
            {title && <h2 className="display h2">{title}</h2>}
            {intro && <p className="text-[19px] leading-snug text-graphite lg:pb-1">{intro}</p>}
          </div>
        )}
        <div className={title || intro ? "mt-8 lg:mt-10" : ""}>{children}</div>
      </div>
    </section>
  );
}
