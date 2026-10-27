import Matrix from "@/components/blocks/Matrix";
import { plan } from "@/lib/site";

// The sprint grid at full width, with its explanation above it.
export default function SprintPlan() {
  return (
    <section className="band">
      <div className="wrap py-12 lg:py-16">
        <div className="grid gap-x-12 gap-y-3 lg:grid-cols-2 lg:items-end">
          <h2 className="display h2">{plan.title}</h2>
          <p className="text-[19px] leading-snug text-graphite lg:pb-1">{plan.intro}</p>
        </div>
        <div className="mt-8 lg:mt-10">
          <Matrix />
        </div>
      </div>
    </section>
  );
}
