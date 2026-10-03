import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata = {
  title: "Start a Creative Testing Sprint",
  description:
    "Tell Lumivance what you sell and what you’re running now. We reply within one business day, then send a written plan of the angles we’d test first. No obligation.",
  alternates: { canonical: "/contact" },
};

const steps = [
  { title: "We reply within one business day,", body: "with a few times for a 30-minute call." },
  { title: "We look at what you run now:", body: "your product, your current ads and roughly what you spend." },
  { title: "You get a written sprint plan:", body: "the angles we’d test first and what it costs. No obligation." },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Start a Creative Testing Sprint."
        intro="Tell us what you sell and what you’re running now. A few lines is plenty."
      />

      <section className="wrap grid-12 gap-y-14 pb-24">
        <div className="col-span-12 lg:col-span-4">
          <h2 className="label text-graphite">What happens next</h2>
          <ol className="mt-4 border-t border-ink">
            {steps.map((s, i) => (
              <li key={s.title} className="grid grid-cols-[52px_1fr] border-b border-rule py-4">
                <span className="display text-[30px] leading-none">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-[17px] leading-snug">
                  <span className="font-display font-bold tracking-[-0.01em]">{s.title}</span>{" "}
                  <span className="text-graphite">{s.body}</span>
                </p>
              </li>
            ))}
          </ol>

          <dl className="mt-10 space-y-3">
            <Detail label="Email" value={site.email} href={`mailto:${site.email}`} />
            {site.phone && <Detail label="Phone" value={site.phone} href={`tel:${site.phone.replace(/[^+\d]/g, "")}`} />}
            <Detail label="Where" value={site.location} />
          </dl>
        </div>

        <div className="col-span-12 lg:col-span-7 lg:col-start-6">
          <ContactForm />
        </div>
      </section>
    </>
  );
}

function Detail({ label, value, href }) {
  return (
    <div className="grid grid-cols-[72px_1fr] items-baseline gap-3">
      <dt className="label text-[11px] text-graphite">{label}</dt>
      <dd className="text-[17px]">
        {href ? (
          <a href={href} className="break-all underline decoration-tally underline-offset-2 hover:text-tally">
            {value}
          </a>
        ) : (
          value
        )}
      </dd>
    </div>
  );
}
