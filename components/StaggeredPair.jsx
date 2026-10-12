// Two pieces of media staggered: A on the right, B overlapping its lower-left
// corner on a matte the color of the page. Used by every hero.
export default function StaggeredPair({ a, b, caption, className = "" }) {
  return (
    <div className={`grid grid-cols-10 ${className}`}>
      <figure className="col-span-8 col-start-3 row-start-1">
        {a}
        {caption && <figcaption className="meta ml-[40%] mt-3 text-right">{caption}</figcaption>}
      </figure>
      {/* Percentage margins resolve against this cell's width (half the pair). */}
      <div className="relative z-10 col-span-5 col-start-1 row-start-1 mt-[132%] shadow-[0_0_0_7px_#F4F1EA]">{b}</div>
    </div>
  );
}
