import Link from "next/link";
import Block from "@/components/blocks/Block";
import CtaBand from "@/components/blocks/CtaBand";
import HubIndex from "@/components/blocks/HubIndex";
import PageHero from "@/components/blocks/PageHero";
import PostCard from "@/components/PostCard";
import { posts } from "@/lib/blog";

export const metadata = {
  title: "Resources",
  description:
    "The Lumivance blog on AI video ads for brands, plus our glossary of ad terms and answers to common questions: costs, testing, labeling rules and how to brief an agency.",
  alternates: { canonical: "/resources" },
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Resources" }]}
        title="Guides and reference"
        lede="Straight answers to the questions brands ask before they spend on video ads, and how we work, written down so you can use it with or without us."
        media={{ stills: ["emera-b-2", "fizzbears-b-2"] }}
      />
      <Block title="From the blog" intro="The newest posts. Every guide we’ve written is on the blog.">
        <ul className="grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {posts.slice(0, 3).map((p) => (
            <li key={p.slug}>
              <PostCard post={p} />
            </li>
          ))}
        </ul>
        <p className="mt-10">
          <Link href="/resources/blog" className="btn">
            See all {posts.length} posts
          </Link>
        </p>
      </Block>
      <Block title="Reference" layout="side">
        <HubIndex keys={["work", "glossary", "faq"]} />
      </Block>
      <CtaBand />
    </>
  );
}
