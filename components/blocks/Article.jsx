import Prose from "@/components/blocks/Prose";

// A long guide on one page: a contents list that links to each section, then
// the sections themselves.
export default function Article({ sections }) {
  return (
    <div className="grid gap-x-14 gap-y-10 lg:grid-cols-[260px_1fr]">
      <nav aria-label="On this page" className="lg:sticky lg:top-24 lg:self-start">
        <p className="h3">On this page</p>
        <ol className="mt-3 space-y-2 text-[15px]">
          {sections.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`} className="text-graphite underline-offset-4 hover:text-accent hover:underline">
                {s.heading}
              </a>
            </li>
          ))}
        </ol>
      </nav>
      <Prose sections={sections} />
    </div>
  );
}
