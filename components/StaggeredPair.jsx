// Two pieces of media side by side, the second set a little lower so the pair
// has some movement without leaving a gap. Used by the inner-page heroes.
export default function StaggeredPair({ a, b, caption, className = "" }) {
  return (
    <figure className={className}>
      <div className="grid grid-cols-2 items-start gap-3">
        <div>{a}</div>
        <div className="mt-10">{b}</div>
      </div>
      {caption && <figcaption className="meta mt-3 text-right">{caption}</figcaption>}
    </figure>
  );
}
