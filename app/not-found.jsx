import Link from "next/link";
import Tally from "@/components/Tally";

export default function NotFound() {
  return (
    <section className="wrap grid-12 py-24 lg:py-32">
      <div className="gut">
        <span className="label text-graphite">404</span>
      </div>
      <div className="body">
        <h1 className="display h2">
          <Tally>This page didn’t make the cut.</Tally>
        </h1>
        <p className="lede mt-5 max-w-measure text-graphite">
          It may have moved, or it never existed. The work and the offer are on the homepage.
        </p>
        <Link href="/" className="btn mt-9">
          Back to the homepage
          <span aria-hidden="true" className="font-mono font-medium">
            →
          </span>
        </Link>
      </div>
    </section>
  );
}
