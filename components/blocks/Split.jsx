import Still from "@/components/Still";

// The argument on one side, a still from the spec work on the other.
export default function Split({ paras, still, caption }) {
  return (
    <div className="grid items-start gap-8 sm:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)] sm:gap-12">
      <div className="max-w-[640px] space-y-4">
        {paras.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
      <Still id={still} caption={caption} sizes="(min-width: 1024px) 340px, 90vw" className="max-w-[340px]" />
    </div>
  );
}
