import Reveal from "@/components/Reveal";

export default function PageHeader({ eyebrow, title, intro }) {
  return (
    <section className="relative overflow-hidden">
      <div className="container-x pb-6 pt-36 text-center sm:pt-44">
        <Reveal as="div" className="mx-auto inline-block">
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-amber" />
            {eyebrow}
          </span>
        </Reveal>
        <Reveal
          as="h1"
          delay={70}
          className="display-tight mx-auto mt-6 max-w-4xl font-display text-[2.7rem] font-bold text-bone sm:text-6xl lg:text-[4.4rem]"
        >
          {title}
        </Reveal>
        {intro && (
          <Reveal
            as="p"
            delay={140}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-sand sm:text-lg"
          >
            {intro}
          </Reveal>
        )}
      </div>
    </section>
  );
}
