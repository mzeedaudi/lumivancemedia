import Still from "@/components/Still";

// The argument on one side, a still from the spec work on the other.
export default function Split({ paras, still, caption, ink = false }) {
  return (
    <div className="grid items-start gap-8 sm:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] sm:gap-10">
      <div className={`space-y-4 ${ink ? "text-on-ink" : ""}`}>
        {paras.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
      <Still id={still} caption={caption} ink={ink} sizes="(min-width: 1024px) 340px, 90vw" className="max-w-[360px]" />
    </div>
  );
}
