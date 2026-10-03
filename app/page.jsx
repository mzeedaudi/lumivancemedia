import Hero from "@/components/Hero";
import Method from "@/components/Method";
import WorkGrid from "@/components/WorkGrid";

// The homepage is one argument, in order: the claim, the method, the work,
// how a sprint runs, what it costs, who runs it, the objections, the ask.
// Sections 04–08 land in later review rounds.
export default function Home() {
  return (
    <>
      <Hero />
      <Method />
      <WorkGrid />
    </>
  );
}
