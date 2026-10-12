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
  "We reply within one business day with a few times for a 30-minute call.",
  "On the call we look at what you run now: your product, your current ads and roughly what you spend.",
  "You get a written sprint plan with the angles we’d test first and what it costs. No obligation.",
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Start a Creative Testing Sprint"
        intro="Tell us what you sell and what you’re running now. A few lines is plenty."
      />

      <section className="wrap grid-12 gap-y-14 pb-24">
        <div className="col-span-12 lg:col-span-7">
          <ContactForm />
        </div>

        <div className="col-span-12 lg:col-span-4 lg:col-start-9">
          <h2 className="h3">What happens next</h2>
          <ol className="mt-3 list-decimal space-y-3 pl-5 text-graphite marker:text-ink">
            {steps.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ol>

          <h2 className="h3 mt-10">Or get in touch directly</h2>
          <p className="mt-3">
            <a href={`mailto:${site.email}`} className="link break-all">
              {site.email}
            </a>
          </p>
          {site.phone && (
            <p className="mt-2">
              <a href={`tel:${site.phone.replace(/[^+\d]/g, "")}`} className="link">
                {site.phone}
              </a>
            </p>
          )}
          <p className="meta mt-2">{site.location}</p>
        </div>
      </section>
    </>
  );
}
