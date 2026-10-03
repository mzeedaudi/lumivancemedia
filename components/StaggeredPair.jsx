// Two pieces of media staggered: A on the right, B overlapping its lower-left
// corner on a paper matte. Used by the homepage hero and every inner-page hero.
export default function StaggeredPair({ a, b, caption, className = "" }) {
  return (
    <div className={`grid grid-cols-10 ${className}`}>
      <figure className="col-span-8 col-start-3 row-start-1">
        {a}
        {caption && (
          <figcaption className="label ml-[40%] mt-3 text-right text-[10.5px] text-graphite">{caption}</figcaption>
        )}
      </figure>
      {/* Percentage margins resolve against this cell's width (half the pair). */}
      <div className="relative z-10 col-span-5 col-start-1 row-start-1 mt-[132%] shadow-[0_0_0_7px_#F2EDE4]">{b}</div>
    </div>
  );
}
