import Link from "next/link";
import { cta } from "@/lib/site";

// A single line and a link, halfway down a long page, for readers who already
// know they have the problem the page describes.
export default function MidCta({ text, label = "Ask for a second opinion" }) {
  return (
    <div className="tile flex flex-col gap-5 px-6 py-7 sm:flex-row sm:items-center sm:justify-between sm:px-10">
      <p className="lede max-w-[680px] font-semibold tracking-[-0.016em]">{text}</p>
      <Link href={cta.href} className="btn flex-none whitespace-nowrap">
        {label}
      </Link>
    </div>
  );
}
