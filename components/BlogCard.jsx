import Link from "next/link";
import Reveal from "@/components/Reveal";
import BlogArt from "@/components/BlogArt";
import { formatDate } from "@/lib/blog";

export default function BlogCard({ post, delay = 0, featured = false }) {
  return (
    <Reveal
      delay={delay}
      className={`group ring-gradient relative flex h-full flex-col overflow-hidden rounded-3xl bg-ink-soft/70 transition-colors hover:bg-ink-panel ${
        featured ? "lg:flex-row" : ""
      }`}
    >
      {/* topic cover art */}
      <div
        className={`relative flex-none overflow-hidden ${featured ? "lg:w-1/2" : ""}`}
        style={{ minHeight: featured ? undefined : "8rem" }}
      >
        <div className={`relative ${featured ? "h-full min-h-[14rem] lg:min-h-full" : "h-36"}`}>
          <BlogArt post={post} uid="card" className="absolute inset-0 h-full w-full" />
          <span className="absolute bottom-5 left-6 rounded-full bg-black/30 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur">
            {post.category}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-7">
        <p className="text-xs text-ink2">
          {formatDate(post.date)} · {post.readMins} min read
        </p>
        <h3
          className={`mt-3 font-display font-semibold leading-snug text-white ${
            featured ? "text-2xl" : "text-lg"
          }`}
        >
          {post.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink2">{post.excerpt}</p>
        <Link
          href={`/blog/${post.slug}`}
          className="mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-white/75 transition-colors group-hover:text-spark"
          aria-label={`Read: ${post.title}`}
        >
          Read article
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>

      {/* full-card link overlay for accessibility/click target */}
      <Link href={`/blog/${post.slug}`} className="absolute inset-0" aria-hidden="true" tabIndex={-1} />
    </Reveal>
  );
}
