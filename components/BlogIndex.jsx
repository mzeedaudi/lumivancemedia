"use client";

import { useState } from "react";
import PostCard from "@/components/PostCard";

// Every post as a flash card, newest first, with a filter by category. All
// posts are in the page's HTML; the filter only hides the ones not chosen.
export default function BlogIndex({ posts, categories }) {
  const [chosen, setChosen] = useState("All");
  const counts = Object.fromEntries(categories.map((c) => [c, posts.filter((p) => p.category === c).length]));
  const options = ["All", ...categories.filter((c) => counts[c])];

  return (
    <>
      <div role="group" aria-label="Filter posts by topic" className="-mx-[var(--pad)] flex gap-2 overflow-x-auto px-[var(--pad)] pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
        {options.map((c) => (
          <button
            key={c}
            type="button"
            aria-pressed={chosen === c}
            onClick={() => setChosen(c)}
            className={`flex-none rounded-full px-4 py-2 text-[14px] font-medium transition-colors ${
              chosen === c ? "bg-ink text-white" : "bg-tile text-ink hover:text-accent"
            }`}
          >
            {c}
            <span className={chosen === c ? "ml-1.5 text-white/60" : "ml-1.5 text-graphite"}>{c === "All" ? posts.length : counts[c]}</span>
          </button>
        ))}
      </div>

      <ul className="mt-8 grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => (
          <li key={p.slug} hidden={chosen !== "All" && p.category !== chosen}>
            <PostCard post={p} />
          </li>
        ))}
      </ul>
    </>
  );
}
