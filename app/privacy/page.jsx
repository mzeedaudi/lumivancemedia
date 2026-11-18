import { AnalyticsChoice } from "@/components/Analytics";
import PageHeader from "@/components/PageHeader";
import { site } from "@/lib/site";

export const metadata = {
  title: "Privacy Policy",
  description:
    "How Lumivance collects, uses, and protects the personal information you share with us.",
  alternates: { canonical: "/privacy" },
};

// Last substantive review of this policy. Update when the content changes.
const UPDATED = "18 November 2026";

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        title="Privacy Policy"
        intro={`How we handle the information you share with us. Last updated ${UPDATED}.`}
      />

      <section className="wrap pb-24">
        <div className="max-w-[760px] space-y-10">
          <Section title="Who we are">
            <p>
              {site.legal.entity} (&ldquo;we&rdquo;, &ldquo;us&rdquo;) operates
              this website and provides performance creative and advertising services.
              For any question about this policy or your data, contact us at{" "}
              <a href={`mailto:${site.email}`}>
                {site.email}
              </a>
              .
            </p>
          </Section>

          <Section title="What we collect">
            <p>We collect what you choose to give us, and basic information about how the site is used:</p>
            <ul>
              <li>
                <strong>Contact form submissions.</strong> Your name, email
                address, brand, the service you&rsquo;re interested in, and the
                message you write. These
                are sent to our inbox so we can reply.
              </li>
              <li>
                <strong>Email correspondence.</strong> If you email us directly,
                we keep that thread so we can pick up where we left off.
              </li>
              <li>
                <strong>Website analytics.</strong> Google Analytics records the
                pages you visit, how you reached the site, your device and
                browser, your approximate location, and actions such as sending
                the contact form. It uses cookies to do this. It does not receive
                your name, email address or the message you write.
              </li>
            </ul>
            <p>We do not run advertising trackers on this site.</p>
          </Section>

          <Section title="Why we use it">
            <p>
              To respond to your enquiry, provide the services you ask for, keep
              records of our business correspondence, and understand which pages
              are useful so we can improve the site. We do not sell your
              information, and we do not share it with third parties for their
              own marketing.
            </p>
          </Section>

          <Section title="Analytics and your choices">
            <p>
              If you are in the European Economic Area, the UK or Switzerland,
              analytics cookies stay off unless you accept them. Elsewhere,
              analytics is on unless you decline. You can change your choice here
              at any time:
            </p>
            <AnalyticsChoice />
          </Section>

          <Section title="Who can see it">
            <p>
              Your submission is handled by our own team and by the service
              providers that run our infrastructure &mdash; our website host and
              our email provider. They process data on our instructions only.
              Website analytics is handled by Google, which may process it
              outside your country.
            </p>
          </Section>

          <Section title="How long we keep it">
            <p>
              We keep enquiry correspondence for as long as needed to serve you,
              and afterwards only as long as required for our business records.
              Ask us to delete your information at any time and we will, unless
              we are legally required to retain it. Analytics data is kept for
              14 months.
            </p>
          </Section>

          <Section title="Your rights">
            <p>
              You can ask us to give you a copy of the information we hold about
              you, correct it if it is wrong, or delete it. You can also object
              to how we use it. Email{" "}
              <a href={`mailto:${site.email}`}>
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
    <div className="border-t border-rule pt-5">
      <h2 className="display text-[23px]">{title}</h2>
      <div className="mt-3 space-y-3 text-graphite [&_a]:text-ink [&_a]:underline [&_a]:decoration-accent [&_a]:underline-offset-2 [&_li]:ml-5 [&_li]:list-disc [&_strong]:text-ink [&_ul]:space-y-2">
        {children}
      </div>
    </div>
  );
}
