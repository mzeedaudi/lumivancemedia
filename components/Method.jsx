import { Lines } from "@/components/Tally";
import Matrix from "@/components/blocks/Matrix";
import VideoRow from "@/components/blocks/VideoRow";
import { ads, method } from "@/lib/site";

// 02 — Proof by method instead of borrowed logos: three real spec openers for
// one product, then the shape of a full twenty-ad sprint and how it's read.
export default function Method() {
  const { example, matrix } = method;
  const openers = example.slugs.map((slug, i) => ({
    slug,
    tag: `Opener ${String.fromCharCode(65 + i)}`,
    title: ads[slug].title,
    text: example.openers[i],
  }));

  return (
    <section id="method" className="wrap">
      <div className="grid-12 border-t border-rule py-16 lg:py-24">
        <div className="gut">
          <span className="label block">02</span>
          <span className="label mt-1 block text-graphite">How we work</span>
        </div>

        <div className="body">
          <h2 className="display h2">
            <Lines>{method.title}</Lines>
          </h2>
          <p className="mt-5 max-w-measure">{method.intro}</p>

          <div className="mt-12">
            <VideoRow items={openers} />
          </div>
          <p className="label mt-5 text-[11px] text-graphite">{example.caption}</p>

          <h3 className="h3 mb-5 mt-20">{matrix.title}</h3>
          <Matrix />

          <dl className="mt-16 border-t border-ink">
            {method.commitments.map((c) => (
              <div key={c.label} className="grid gap-1 border-b border-rule py-4 sm:grid-cols-[180px_1fr] sm:gap-6">
                <dt className="label pt-1.5 text-graphite">{c.label}</dt>
                <dd className="h3 text-[21px] [text-wrap:balance] sm:text-[24px]">{c.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
