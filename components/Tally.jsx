// Headlines end on a tally-red full stop: the page's one recurring accent mark.
export default function Tally({ children }) {
  const text = String(children);
  if (!text.endsWith(".")) return text;
  return (
    <>
      {text.slice(0, -1)}
      <span className="text-tally">.</span>
    </>
  );
}

// A headline set as deliberate lines rather than wherever the browser breaks
// it. Each line balances on its own; only the last full stop turns red.
export function Lines({ children }) {
  const lines = Array.isArray(children) ? children : [children];
  return lines.map((line, i) => (
    <span key={line} className="block [text-wrap:balance]">
      {i === lines.length - 1 ? <Tally>{line}</Tally> : line}
    </span>
  ));
}
