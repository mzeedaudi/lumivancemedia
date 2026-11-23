import Block from "@/components/blocks/Block";
import CtaBand from "@/components/blocks/CtaBand";
import PageHero from "@/components/blocks/PageHero";
import BlogIndex from "@/components/BlogIndex";
import JsonLd from "@/components/JsonLd";
import { blogCategories, posts } from "@/lib/blog";
import { blog, breadcrumbs } from "@/lib/schema";

export const metadata = {
  title: "Blog: AI video ads for brands",
  description:
    "Straight answers on AI video ads for brands: what they cost, whether they work, how to test them, the labeling rules on Meta, TikTok and YouTube, and how to brief an agency.",
  alternates: { canonical: "/resources/blog" },
};

// The fields a card needs, so the whole post isn't sent to the browser.
const card = ({ slug, href, category, topic, tone, minutes, summary, meta }) => ({ slug, href, category, topic, tone, minutes, summary, meta: { title: meta.title } });

export default function BlogPage() {
  const crumbs = [{ label: "Resources", href: "/resources" }, { label: "Blog" }];
  return (
    <>
      <JsonLd data={[blog(posts), breadcrumbs(crumbs, "/resources/blog")]} />
      <PageHero
        crumbs={crumbs}
        title="The blog"
        lede="Straight answers on AI video ads for brands: what they cost, when they work, how to test them, and the rules on labeling. Written by the people who make the ads."
        media={{ card: { topic: "AI video ads, without the hype", category: "The Lumivance blog", tone: "accent", foot: `${posts.length} posts` } }}
      />
      <Block title="Every post" intro="Pick a topic, or read from the top. The newest posts come first.">
        <BlogIndex posts={posts.map(card)} categories={blogCategories.map((c) => c.name)} />
      </Block>
      <CtaBand />
    </>
  );
}
