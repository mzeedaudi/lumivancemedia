"use client";

import { useMemo, useState } from "react";
import BlogCard from "@/components/BlogCard";

// Client-side category filter for the blog index.
export default function BlogList({ posts, categories }) {
  const [active, setActive] = useState("All");
  const [query, setQuery] = useState("");

  const counts = useMemo(() => {
    const c = { All: posts.length };
    for (const cat of categories) c[cat] = posts.filter((p) => p.category === cat).length;
    return c;
  }, [posts, categories]);

  const filters = ["All", ...categories];
  const q = query.trim().toLowerCase();

  const filtered = useMemo(() => {
    return posts.filter((p) => {
      const inCategory = active === "All" || p.category === active;
      if (!inCategory) return false;
      if (!q) return true;
      const haystack = `${p.title} ${p.excerpt} ${p.category} ${p.keywords.join(" ")}`.toLowerCase();
      return haystack.includes(q);
    });
  }, [posts, active, q]);

  // Featured card only when browsing everything with no search query.
  const showFeatured = active === "All" && !q;
  const featured = showFeatured ? filtered[0] : null;
  const grid = showFeatured ? filtered.slice(1) : filtered;

  return (
    <>
      {/* Search */}
      <div className="container-x">
        <div className="relative mx-auto max-w-md">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/40"
          >
            <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.8" />
            <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles…"
            aria-label="Search articles"
            className="w-full rounded-full border border-line bg-ink/60 py-3 pl-11 pr-10 text-sm text-white outline-none transition-colors placeholder:text-white/35 focus:border-brand-violet"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Clear search"
              className="absolute right-3 top-1/2 grid h-6 w-6 -translate-y-1/2 cursor-pointer place-items-center rounded-full text-white/50 transition-colors hover:bg-white/10 hover:text-white"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Filter chips */}
      <div className="container-x mt-6">
        <div
          role="tablist"
          aria-label="Filter posts by category"
          className="flex flex-wrap items-center justify-center gap-2"
        >
          {filters.map((f) => {
            const isActive = active === f;
            return (
              <button
                key={f}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(f)}
                className={`cursor-pointer rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "border-transparent bg-white text-ink"
                    : "border-line bg-white/[0.02] text-ink2 hover:bg-white/[0.06] hover:text-white"
                }`}
              >
                {f}
                <span className={isActive ? "text-ink/60" : "text-white/35"}>
                  {" "}
                  {counts[f]}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Featured (only on "All") */}
      {featured && (
        <div className="container-x mt-12">
          <BlogCard post={featured} featured />
        </div>
      )}

      {/* Grid */}
      <div className="container-x mt-5 pb-8">
        {grid.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {grid.map((post, i) => (
              <BlogCard key={`${active}-${post.slug}`} post={post} delay={(i % 3) * 60} />
            ))}
          </div>
        ) : (
          <p className="py-16 text-center text-ink2">
            {q
              ? `No articles match “${query.trim()}”.`
              : "No posts in this category yet."}
          </p>
        )}
      </div>
    </>
  );
}
