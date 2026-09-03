import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata = {
  title: "Terms of Use",
  description:
    "The terms that govern your use of the Lumivance website and the information published on it.",
  alternates: { canonical: "/terms" },
};

const UPDATED = "27 July 2026";

export default function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Terms of Use"
        intro={`The terms governing your use of this website. Last updated ${UPDATED}.`}
      />

      <section className="container-x pb-24">
        <div className="mx-auto max-w-3xl space-y-10">
          <Section title="Agreement">
            <p>
              By using this website you accept these terms. If you do not agree
              with them, please do not use the site. The site is operated by{" "}
              {site.legal.entity}.
            </p>
          </Section>

          <Section title="These terms are not a services contract">
            <p>
              Nothing on this site is an offer or a binding agreement to provide
              services. Any engagement between us is governed by a separate
              written contract, and where that contract conflicts with these
              terms, the contract prevails.
            </p>
          </Section>

          <Section title="Information on this site">
            <p>
              The articles, guides, and commentary published here are general
              information about marketing practice. They are not tailored
              advice, and they are not financial, legal, or tax advice. Results
              described are specific to their circumstances; marketing outcomes
              vary and nothing here is a promise or guarantee of any particular
              result for your business.
            </p>
            <p>
              We work to keep the site accurate and current, but we do not
              warrant that it is free of errors or omissions.
            </p>
          </Section>

          <Section title="Our content">
            <p>
              The text, design, graphics, and code on this site belong to us or
              our licensors and are protected by copyright. You may read, share,
              and quote from it with attribution. You may not republish it as
              your own, or copy the site&rsquo;s design or code for a competing
              service, without our written permission.
            </p>
          </Section>

          <Section title="Third-party names and links">
            <p>
              Product, company, and platform names referenced on this site
              belong to their respective owners and are used for identification
              only. Their use does not imply any endorsement, partnership, or
              affiliation unless we state otherwise. Where we link to other
              sites, we are not responsible for their content or practices.
            </p>
          </Section>

          <Section title="Acceptable use">
            <p>
              Do not use this site unlawfully, attempt to gain unauthorised
              access to it, interfere with its operation, or submit anything
              through our forms that is unlawful, misleading, or infringes
              someone else&rsquo;s rights.
            </p>
          </Section>

          <Section title="Liability">
            <p>
              To the fullest extent permitted by law, we are not liable for any
              indirect or consequential loss, or for any loss of profit,
              revenue, or data, arising from your use of this site or reliance
              on its content. Nothing in these terms limits liability that
              cannot lawfully be limited.
            </p>
          </Section>

          <Section title="Changes">
            <p>
              We may update these terms from time to time. The date at the top
              of this page shows when they were last revised, and continued use
              of the site means you accept the current version.
            </p>
          </Section>

          <Section title="Contact">
            <p>
              Questions about these terms? Email{" "}
              <a href={`mailto:${site.email}`} className="text-spark underline">
                {site.email}
              </a>
              .
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
      <h2 className="font-display text-xl font-semibold tracking-tight text-bone">
        {title}
      </h2>
      <div className="mt-3 space-y-3 text-[1.02rem] leading-relaxed text-ink2">
        {children}
      </div>
    </Reveal>
  );
}
