import VideoRow from "@/components/blocks/VideoRow";
import { openers } from "@/lib/site";

// Why twenty at a time: the argument on the left, three real openers for one
// product on the right.
export default function Openers() {
  return (
    <section className="wrap">
      <div className="grid-12 gap-y-10 border-t border-rule py-16 lg:py-24">
        <div className="col-span-12 lg:col-span-4">
          <h2 className="display h2">{openers.title}</h2>
          <p className="mt-5">{openers.intro}</p>
          <p className="mt-4 text-graphite">{openers.example}</p>
        </div>
        <div className="col-span-12 lg:col-span-7 lg:col-start-6">
          <VideoRow items={openers.items} />
        </div>
      </div>
    </section>
  );
}
