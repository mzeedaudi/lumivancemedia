import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-x flex min-h-[70vh] flex-col items-center justify-center py-32 text-center">
      <p className="font-serif text-7xl italic text-gradient">404</p>
      <h1 className="display-tight mt-6 font-display text-3xl font-bold text-bone sm:text-4xl">
        This frame was cut
      </h1>
      <p className="mt-4 max-w-md text-sand">
        The page you’re after doesn’t exist or has moved. Back to the reel.
      </p>
      <Link href="/" className="btn-primary mt-9">
        Back to home
      </Link>
    </section>
  );
}
