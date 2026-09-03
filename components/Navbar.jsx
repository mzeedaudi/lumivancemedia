"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav } from "@/lib/site";
import { Wordmark } from "@/components/Logo";

// Transparent over the film hero; solidifies into warm glass once the page
// scrolls. Simple flat menu — the studio has four destinations, not a tree.
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const active = (href) => pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled || open ? "border-line bg-ink/80 backdrop-blur-xl" : "border-transparent bg-transparent"
      }`}
    >
      <nav className="container-x flex h-[4.25rem] items-center justify-between gap-4">
        <Link href="/" aria-label="Lumivance home" className="flex-none">
          <Wordmark markClassName="h-8 w-auto" textClassName="text-lg" uid="nav" />
        </Link>

        <ul className="hidden items-center gap-1 sm:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                  active(item.href) ? "text-bone" : "text-bone/60 hover:text-bone"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex flex-none items-center gap-2">
          <Link href="/contact" className="btn-primary hidden !px-5 !py-2.5 sm:inline-flex">
            Start a retainer
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-bone/15 bg-ink/40 text-bone backdrop-blur sm:hidden"
          >
            <span className="relative block h-4 w-5">
              <span className={`absolute left-0 block h-0.5 w-5 bg-current transition-all duration-300 ${open ? "top-1.5 rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 top-1.5 block h-0.5 w-5 bg-current transition-all duration-300 ${open ? "opacity-0" : "opacity-100"}`} />
              <span className={`absolute left-0 block h-0.5 w-5 bg-current transition-all duration-300 ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile sheet */}
      <div className={`fixed inset-x-0 bottom-0 top-[4.25rem] z-40 sm:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}>
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-ink/70 backdrop-blur-sm transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
        />
        <div
          className={`glass absolute inset-x-4 top-4 origin-top rounded-3xl p-4 transition-all duration-300 ${
            open ? "translate-y-0 scale-100 opacity-100" : "-translate-y-3 scale-95 opacity-0"
          }`}
        >
          <ul className="flex flex-col">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-2xl px-4 py-3.5 font-display text-2xl font-semibold tracking-tight text-bone/90 transition-colors hover:bg-bone/[0.05]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/contact" className="btn-primary mt-3 w-full">
            Start a retainer
          </Link>
        </div>
      </div>
    </header>
  );
}
