import Reveal from "@/components/Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  className = "",
}) {
  const centered = align === "center";
  return (
    <div
      className={`${centered ? "mx-auto text-center" : ""} max-w-2xl ${className}`}
    >
      {eyebrow && (
        <Reveal as="p" className="eyebrow">
          <span className="h-1.5 w-1.5 rounded-full bg-spark" />
          {eyebrow}
        </Reveal>
      )}
      <Reveal
        as="h2"
        delay={60}
        className="mt-5 font-display text-3xl font-semibold leading-[1.08] tracking-tightest sm:text-4xl md:text-[2.85rem]"
      >
        {title}
      </Reveal>
      {intro && (
        <Reveal
          as="p"
          delay={120}
          className={`mt-5 text-base leading-relaxed text-ink2 sm:text-lg ${
            centered ? "mx-auto" : ""
          }`}
        >
          {intro}
        </Reveal>
      )}
    </div>
  );
}
