import Link from "next/link";
import FlashCard from "@/components/FlashCard";

// One post in a list: its flash card, then its category, title and summary.
export default function PostCard({ post }) {
  return (
    <Link href={post.href} className="group flex h-full flex-col">
      <FlashCard post={post} className="transition-transform duration-300 group-hover:-translate-y-1" />
      <span className="meta mt-4">
        {post.category} · {post.minutes} min read
      </span>
      <span className="h3 mt-1 transition-colors group-hover:text-accent">{post.meta.title}</span>
      <span className="mt-1.5 text-[15px] leading-snug text-graphite">{post.summary}</span>
    </Link>
  );
}
