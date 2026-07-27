import Link from "next/link";
import Reveal from "@/components/Reveal";
import TalentPhoto from "@/components/TalentPhoto";
import { talent } from "@/lib/site";

const chipAccent = {
  spark: "border-spark/60 text-spark",
  indigo: "border-brand-indigo/70 text-[#9b9bff]",
  fuchsia: "border-brand-fuchsia/60 text-brand-fuchsia",
  violet: "border-brand-violet/60 text-[#b9a8ff]",
};

// Desktop scatter positions (3 left, 3 right) around the centred headline.
const scatter = [
  "left-[2%] top-[5%]", // L top
  "right-[3%] top-[1%]", // R top
  "left-[0%] top-[39%]", // L mid
  "right-[0%] top-[37%]", // R mid
  "left-[6%] top-[71%]", // L bottom
  "right-[5%] top-[69%]", // R bottom
];

function Chip({ role, accent }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border bg-ink/90 px-3 py-1 text-xs font-medium backdrop-blur ${chipAccent[accent]}`}
    >
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {role}
    </span>
  );
}

function Photo({ person, className = "" }) {
  return (
    <div className={`relative ${className}`}>
      <div className="aspect-[4/5] w-full shadow-card">
        <TalentPhoto src={person.src} role={person.role} accent={person.accent} />
      </div>
      <span className="absolute -bottom-3 left-1/2 -translate-x-1/2">
        <Chip role={person.role} accent={person.accent} />
      </span>
    </div>
  );
}

export default function Talent() {
  return (
    <section className="container-x py-20 sm:py-28">
      {/* ===== Desktop: scattered floating headshots ===== */}
      <div className="relative mx-auto hidden h-[700px] max-w-6xl lg:block">
        {talent.map((person, i) => (
          <div
            key={person.role}
            className={`absolute w-[150px] ${scatter[i]}`}
          >
            <Reveal delay={i * 110}>
              <div
                className="animate-float"
                style={{ animationDelay: `${i * 0.8}s` }}
              >
                <Photo person={person} />
              </div>
            </Reveal>
          </div>
        ))}

        {/* Centre content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <Reveal as="p" className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-spark" />
            Our people
          </Reveal>
          <Reveal
            as="h2"
            delay={80}
            className="mt-6 max-w-xl font-display text-[2.9rem] font-semibold leading-[1.05] tracking-tightest xl:text-5xl"
          >
            <span className="text-gradient">World-class talent</span>
            <span className="block text-white">for a borderless market</span>
          </Reveal>
          <Reveal
            as="p"
            delay={140}
            className="mt-5 max-w-md text-base leading-relaxed text-ink2"
          >
            A senior, fully-remote team of acquisition specialists — assembled
            from the top 1% of growth talent, wherever they happen to live.
          </Reveal>
          <Reveal as="div" delay={200} className="mt-8">
            <Link href="/contact" className="btn-grad">
              Build your team
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </Reveal>
        </div>
      </div>

      {/* ===== Mobile / tablet: heading + photo grid ===== */}
      <div className="lg:hidden">
        <div className="mx-auto max-w-xl text-center">
          <Reveal as="p" className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-spark" />
            Our people
          </Reveal>
          <Reveal
            as="h2"
            delay={80}
            className="mt-5 font-display text-3xl font-semibold leading-[1.08] tracking-tightest sm:text-4xl"
          >
            <span className="text-gradient">World-class talent</span>{" "}
            <span className="text-white">for a borderless market</span>
          </Reveal>
          <Reveal as="p" delay={140} className="mx-auto mt-5 max-w-md text-base leading-relaxed text-ink2">
            A senior, fully-remote team of acquisition specialists — the top 1%
            of growth talent, wherever they live.
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-x-5 gap-y-9 sm:grid-cols-3">
          {talent.map((person, i) => (
            <Reveal key={person.role} delay={(i % 3) * 80}>
              <Photo person={person} />
            </Reveal>
          ))}
        </div>

        <Reveal as="div" delay={120} className="mt-12 text-center">
          <Link href="/contact" className="btn-grad">
            Build your team
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
