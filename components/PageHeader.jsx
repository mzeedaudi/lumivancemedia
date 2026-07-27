import Reveal from "@/components/Reveal";

export default function PageHeader({ eyebrow, title, intro }) {
  return (
    <section className="relative overflow-hidden">
      <div className="container-x pb-6 pt-36 text-center sm:pt-44">
        <Reveal as="div" className="mx-auto inline-block">
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-spark" />
            {eyebrow}
          </span>
        </Reveal>
        <Reveal
          as="h1"
          delay={70}
          className="mx-auto mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-tightest sm:text-6xl"
        >
          {title}
        </Reveal>
        {intro && (
          <Reveal
            as="p"
            delay={140}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink2 sm:text-lg"
          >
            {intro}
          </Reveal>
        )}
      </div>
    </section>
  );
}
