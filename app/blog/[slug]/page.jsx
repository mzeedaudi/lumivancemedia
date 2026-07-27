import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import BlogArt from "@/components/BlogArt";
import BlogCard from "@/components/BlogCard";
import BlogCTA from "@/components/BlogCTA";
import CTA from "@/components/CTA";
import {
  posts,
  getPost,
  getAllSlugs,
  getRelatedPosts,
  getAuthor,
  formatDate,
  categoryAccent,
  ctaByCategory,
} from "@/lib/blog";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const post = getPost(params.slug);
  if (!post) return {};
  const url = `/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords,
    authors: [{ name: post.author }],
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url,
      publishedTime: post.date,
      authors: [post.author],
      tags: post.keywords,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

function initials(name) {
  return name.split(" ").map((n) => n[0]).join("").slice(0, 2);
}

function Block({ block, post, uid }) {
  if (block.fig)
    return (
      <figure className="mt-10">
        <div className="ring-gradient overflow-hidden rounded-2xl">
          <BlogArt post={post} scene={block.fig} uid={uid} className="block h-auto w-full" />
        </div>
        {block.caption && (
          <figcaption className="mt-3 text-center text-sm italic text-ink2">
            {block.caption}
          </figcaption>
        )}
      </figure>
    );
  if (block.h2)
    return (
      <h2 className="mt-12 font-display text-2xl font-semibold tracking-tight text-white">
        {block.h2}
      </h2>
    );
  if (block.p)
    return <p className="mt-5 text-[1.05rem] leading-relaxed text-ink2">{block.p}</p>;
  if (block.quote)
    return (
      <blockquote className="mt-6 border-l-2 border-brand-violet pl-5 font-serif text-xl italic leading-snug text-white/90">
        {block.quote}
      </blockquote>
    );
  if (block.ul)
    return (
      <ul className="mt-5 space-y-3">
        {block.ul.map((item) => (
          <li key={item} className="flex items-start gap-3 text-[1.05rem] leading-relaxed text-ink2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="mt-1 flex-none text-brand-fuchsia">
              <path d="M5 12l4 4L19 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  return null;
}

export default function BlogPostPage({ params }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const accent = categoryAccent[post.category] || { from: "#8B5CF6", to: "#D946EF" };
  const cta = ctaByCategory[post.category] || ctaByCategory.Strategy;
  const author = getAuthor(post.author);
  const related = getRelatedPosts(post.slug, 3);
  const insertAt = Math.min(6, post.body.length); // mid-article inline CTA

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Person", name: post.author },
    publisher: { "@type": "Organization", name: site.name },
    keywords: post.keywords.join(", "),
    articleSection: post.category,
    mainEntityOfPage: `https://lumivance.com/blog/${post.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="container-x pt-36 sm:pt-44">
        <div className="mx-auto max-w-3xl">
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm font-medium text-ink2 transition-colors hover:text-white">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M19 12H5M11 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            All articles
          </Link>

          <span
            className="mt-6 inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white"
            style={{ backgroundImage: `linear-gradient(135deg, ${accent.from}, ${accent.to})` }}
          >
            {post.category}
          </span>

          <h1 className="mt-5 font-display text-3xl font-semibold leading-[1.1] tracking-tightest text-white sm:text-[2.75rem]">
            {post.title}
          </h1>

          <div className="mt-6 flex items-center gap-3 border-b border-line pb-8">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-brand-indigo to-brand-fuchsia text-sm font-semibold text-white">
              {initials(post.author)}
            </span>
            <div className="text-sm">
              <p className="font-semibold text-white">{post.author}</p>
              <p className="text-ink2">
                {formatDate(post.date)} · {post.readMins} min read
              </p>
            </div>
          </div>
        </div>

        {/* Cover art */}
        <div className="mx-auto mt-10 max-w-3xl">
          <div className="ring-gradient overflow-hidden rounded-3xl">
            <BlogArt post={post} uid="hero" className="block h-auto w-full" />
          </div>
        </div>

        {/* Body */}
        <div className="mx-auto mt-2 max-w-3xl">
          {post.body.map((block, i) => (
            <div key={i}>
              {i === insertAt && <BlogCTA cta={cta} variant="inline" />}
              <Block block={block} post={post} uid={`fig-${i}`} />
            </div>
          ))}

          {/* Author bio */}
          {author.bio && (
            <div className="mt-12 flex flex-col gap-4 rounded-3xl border border-line bg-ink-soft/50 p-7 sm:flex-row sm:items-start">
              <span className="grid h-14 w-14 flex-none place-items-center rounded-full bg-gradient-to-br from-brand-indigo via-brand-violet to-brand-fuchsia font-display text-lg font-semibold text-white">
                {author.initials}
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-ink2">Written by</p>
                <p className="mt-1 font-display text-lg font-semibold text-white">
                  {post.author}
                </p>
                <p className="text-sm text-brand-violet">{author.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink2">{author.bio}</p>
              </div>
            </div>
          )}

          {/* End-of-article contextual CTA */}
          <div className="mt-12">
            <BlogCTA cta={cta} />
          </div>
        </div>
      </article>

      {/* Related */}
      {related.length > 0 && (
        <section className="container-x py-20 sm:py-28">
          <Reveal as="h2" className="font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Keep reading
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p, i) => (
              <BlogCard key={p.slug} post={p} delay={i * 80} />
            ))}
          </div>
        </section>
      )}

      <CTA />
    </>
  );
}
