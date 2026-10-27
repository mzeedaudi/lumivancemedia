import SpecTable from "@/components/blocks/SpecTable";

// "The short answer": what the service is, in a paragraph an answer engine can
// quote, with the key facts beside it.
export default function Answer({ text, facts }) {
  return (
    <div className="grid gap-x-14 gap-y-8 lg:grid-cols-2">
      <p className="lede">{text}</p>
      <SpecTable rows={facts} />
    </div>
  );
}
