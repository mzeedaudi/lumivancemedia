import Link from "next/link";
import { cta } from "@/lib/site";

// A single line and a link, halfway down a long page, for readers who already
// know they have the problem the page describes.
export default function MidCta({ text, label = "Ask for a second opinion" }) {
  return (
    <div className="flex flex-col gap-5 border-l-4 border-accent bg-white px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
      <p className="lede max-w-[640px]">{text}</p>
      <Link href={cta.href} className="link flex-none whitespace-nowrap">
        {label} <span aria-hidden="true">→</span>
      </Link>
    </div>
  );
}
