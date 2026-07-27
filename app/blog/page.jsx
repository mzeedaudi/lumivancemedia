import PageHeader from "@/components/PageHeader";
import BlogList from "@/components/BlogList";
import CTA from "@/components/CTA";
import { posts, blogCategories } from "@/lib/blog";

export const metadata = {
  title: "Blog — User Acquisition Insights for Software & Apps",
  description:
    "Actionable guides on paid acquisition, ASO, SEO, performance creative, retention, and growth analytics for SaaS and mobile teams.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Lumivance Blog — User Acquisition Insights",
    description:
      "Actionable guides on paid acquisition, ASO, SEO, creative, retention, and analytics for software and apps.",
    type: "website",
  },
};

export default function BlogPage() {
  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Growth insights for software & apps"
        intro="Field-tested guides on user acquisition — paid media, ASO, SEO, creative, retention, and the metrics that matter."
      />

      <section className="py-12">
        <BlogList posts={posts} categories={blogCategories} />
      </section>

      <CTA />
    </>
  );
}
