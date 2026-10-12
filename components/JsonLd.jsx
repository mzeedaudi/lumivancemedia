// Structured data for search engines and AI assistants. Takes any number of
// schema objects (see lib/schema.js) and skips the empty ones.
export default function JsonLd({ data }) {
  return [data].flat().filter(Boolean).map((d, i) => (
    <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d).replace(/</g, "\\u003c") }} />
  ));
}
