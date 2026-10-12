import Matrix from "@/components/blocks/Matrix";
import { plan } from "@/lib/site";

// The sprint grid at full width on white, with its explanation above it.
export default function SprintPlan() {
  return (
    <section className="wrap pb-16 lg:pb-24">
      <div className="grid-12 gap-y-4">
        <h2 className="display h2 col-span-12 lg:col-span-5">{plan.title}</h2>
        <p className="col-span-12 lg:col-span-6 lg:col-start-7">{plan.intro}</p>
      </div>
      <div className="mt-10">
        <Matrix />
      </div>
    </section>
  );
}
