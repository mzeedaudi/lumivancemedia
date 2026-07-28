import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata = {
  title: "Privacy Policy",
  description:
    "How Lumivance collects, uses, and protects the personal information you share with us.",
  alternates: { canonical: "/privacy" },
};

// Last substantive review of this policy. Update when the content changes.
const UPDATED = "27 July 2026";

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        intro={`How we handle the information you share with us. Last updated ${UPDATED}.`}
      />

      <section className="container-x pb-24">
        <div className="mx-auto max-w-3xl space-y-10">
          <Section title="Who we are">
            <p>
              {site.legal.entity} (&ldquo;we&rdquo;, &ldquo;us&rdquo;) operates
              this website and provides user-acquisition and marketing services.
              For any question about this policy or your data, contact us at{" "}
              <a href={`mailto:${site.email}`} className="text-spark underline">
                {site.email}
              </a>
              .
            </p>
          </Section>

          <Section title="What we collect">
            <p>We only collect what you choose to give us:</p>
            <ul>
              <li>
                <strong>Contact form submissions.</strong> Your name, email
                address, company, budget range, and the message you write. These
                are sent to our inbox so we can reply.
              </li>
              <li>
                <strong>Email correspondence.</strong> If you email us directly,
                we keep that thread so we can pick up where we left off.
              </li>
            </ul>
            <p>
              We do not run advertising or analytics trackers on this site, and
              we do not build profiles of visitors.
            </p>
          </Section>

          <Section title="Why we use it">
            <p>
              Solely to respond to your enquiry, provide the services you ask
              for, and keep records of our business correspondence. We do not
              sell your information, and we do not share it with third parties
              for their own marketing.
            </p>
          </Section>

          <Section title="Who can see it">
            <p>
              Your submission is handled by our own team and by the service
              providers that run our infrastructure &mdash; our website host and
              our email provider. They process data on our instructions only.
            </p>
          </Section>

          <Section title="How long we keep it">
            <p>
              We keep enquiry correspondence for as long as needed to serve you,
              and afterwards only as long as required for our business records.
              Ask us to delete your information at any time and we will, unless
              we are legally required to retain it.
            </p>
          </Section>

          <Section title="Your rights">
            <p>
              You can ask us to give you a copy of the information we hold about
              you, correct it if it is wrong, or delete it. You can also object
              to how we use it. Email{" "}
              <a href={`mailto:${site.email}`} className="text-spark underline">
                {site.email}
              </a>{" "}
              and we will respond within 30 days. Depending on where you live,
              you may also have the right to complain to your local data
              protection authority.
            </p>
          </Section>

          <Section title="Security">
            <p>
              This site is served over HTTPS and form submissions are
              transmitted over an encrypted connection. No system is perfectly
              secure, but we take reasonable measures to protect what you send
              us and limit access to those who need it.
            </p>
          </Section>

          <Section title="Changes">
            <p>
              If we change this policy we will update the date at the top of this
              page. Material changes will be made clear on the site.
            </p>
          </Section>
        </div>
      </section>
    </>
  );
}

function Section({ title, children }) {
  return (
    <Reveal>
      <h2 className="font-display text-xl font-semibold tracking-tight text-white">
        {title}
      </h2>
      <div className="mt-3 space-y-3 text-[1.02rem] leading-relaxed text-ink2 [&_li]:ml-5 [&_li]:list-disc [&_strong]:text-white/90 [&_ul]:space-y-2">
        {children}
      </div>
    </Reveal>
  );
}
