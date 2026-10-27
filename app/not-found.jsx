import Link from "next/link";

export default function NotFound() {
  return (
    <section className="wrap py-20 text-center lg:py-28">
      <h1 className="display h1s">Page not found</h1>
      <p className="lede mx-auto mt-5 max-w-measure text-graphite">That page doesn’t exist, or it has moved.</p>
      <p className="mt-8">
        <Link href="/" className="btn">
          Go to the homepage
        </Link>
      </p>
    </section>
  );
}
