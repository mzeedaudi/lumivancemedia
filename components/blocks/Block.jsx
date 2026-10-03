import { Lines } from "@/components/Tally";

// The section scaffold every page uses: number and label hang in the gutter,
// title and content sit to the right. `ink` turns the section into a dark band.
export default function Block({ id, num, label, title, intro, ink = false, children }) {
  return (
    <section id={id} className={ink ? "bg-ink text-paper" : undefined}>
      <div className="wrap">
        <div className={`grid-12 py-14 lg:py-20 ${ink ? "" : "border-t border-rule"}`}>
          <div className="gut">
            {num && <span className={`label block ${ink ? "text-on-ink" : ""}`}>{num}</span>}
            {label && <span className={`label mt-1 block ${ink ? "text-on-ink" : "text-graphite"}`}>{label}</span>}
          </div>
          <div className="body">
            {title && (
              <h2 className="display h2">
                <Lines>{title}</Lines>
              </h2>
            )}
            {intro && <p className={`mt-5 max-w-measure ${ink ? "text-on-ink" : ""}`}>{intro}</p>}
            {children && <div className={title || intro ? "mt-10 lg:mt-12" : ""}>{children}</div>}
          </div>
        </div>
      </div>
    </section>
  );
}
