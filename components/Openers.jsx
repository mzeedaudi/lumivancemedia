import VideoRow from "@/components/blocks/VideoRow";
import { openers } from "@/lib/site";

// Why twenty at a time: the argument across the top, three real openers for
// one product underneath.
export default function Openers() {
  return (
    <section className="band">
      <div className="wrap py-12 lg:py-16">
        <div className="grid gap-x-12 gap-y-3 lg:grid-cols-2 lg:items-end">
          <h2 className="display h2">{openers.title}</h2>
          <div className="text-[19px] leading-snug text-graphite lg:pb-1">
            <p>{openers.intro}</p>
            <p className="mt-3 text-ink">{openers.example}</p>
          </div>
        </div>
        <div className="mt-8 lg:mt-10">
          <VideoRow items={openers.items} />
        </div>
      </div>
    </section>
  );
}
