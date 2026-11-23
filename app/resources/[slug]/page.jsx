import { notFound } from "next/navigation";
import Blocks from "@/components/blocks/Blocks";
import CtaBand from "@/components/blocks/CtaBand";
import PageHero from "@/components/blocks/PageHero";
import JsonLd from "@/components/JsonLd";
import { longDate, post as findPost, posts } from "@/lib/blog";
import { article, breadcrumbs, faq } from "@/lib/schema";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const p = findPost(params.slug);
  if (!p) return {};
  return {
    title: p.meta.title,
    description: p.meta.description,
    keywords: p.keywords,
    alternates: { canonical: p.href },
    openGraph: { type: "article", title: p.meta.title, description: p.meta.description, ...(p.published && { publishedTime: p.published, modifiedTime: p.modified }) },
  };
}

// A blog post: its flash card beside the headline, then its sections.
export default function PostPage({ params }) {
  const p = findPost(params.slug);
  if (!p) notFound();
  const crumbs = [{ label: "Resources", href: "/resources" }, { label: "Blog", href: "/resources/blog" }, { label: p.name }];
  const aside = [p.modified && `Updated ${longDate(p.modified)}`, `${p.minutes} min read`].filter(Boolean).join(" · ");
  return (
    <>
      <JsonLd
        data={[
          p.published &&
            article({ title: p.meta.title, description: p.meta.description, path: p.href, published: p.published, modified: p.modified, section: p.category, keywords: p.keywords }),
          breadcrumbs(crumbs, p.href),
          faq(p.blocks),
        ]}
      />
      <PageHero crumbs={crumbs} title={p.hero.title} lede={p.hero.lede} aside={aside} media={{ card: p }} />
      <Blocks blocks={p.blocks} />
      <CtaBand />
    </>
  );
}
