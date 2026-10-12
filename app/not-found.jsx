import Link from "next/link";

export default function NotFound() {
  return (
    <section className="wrap py-24 lg:py-32">
      <h1 className="display h1s">Page not found</h1>
      <p className="lede mt-5 max-w-measure text-graphite">That page doesn’t exist, or it has moved.</p>
      <p className="mt-8">
        <Link href="/" className="btn">
          Go to the homepage
          <span aria-hidden="true">→</span>
        </Link>
      </p>
    </section>
  );
}
