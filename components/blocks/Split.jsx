import Still from "@/components/Still";

// The argument in a tile, a still from the spec work beside it.
export default function Split({ paras, still, caption }) {
  return (
    <div className="grid items-stretch gap-3 sm:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] lg:gap-4">
      <div className="tile space-y-4 p-6 text-[18px] leading-relaxed lg:p-10">
        {paras.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
      <Still id={still} caption={caption} sizes="(min-width: 1024px) 440px, 90vw" />
    </div>
  );
}
