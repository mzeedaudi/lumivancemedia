"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav } from "@/lib/site";
import { channels } from "@/lib/channels";
import { Wordmark } from "@/components/Logo";

function Chevron({ open, className = "" }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={`transition-transform duration-200 ${open ? "rotate-180" : ""} ${className}`}
    >
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false); // mobile sheet
  const [svcOpen, setSvcOpen] = useState(false); // desktop services dropdown
  const [mSvcOpen, setMSvcOpen] = useState(false); // mobile services expand
  const pathname = usePathname();
  const svcRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close everything on route change
  useEffect(() => {
    setOpen(false);
    setSvcOpen(false);
    setMSvcOpen(false);
  }, [pathname]);

  // Lock scroll while the mobile sheet is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close the desktop dropdown on outside click / Escape
  useEffect(() => {
    if (!svcOpen) return;
    const onDown = (e) => {
      if (svcRef.current && !svcRef.current.contains(e.target)) setSvcOpen(false);
    };
    const onKey = (e) => {
      if (e.key === "Escape") setSvcOpen(false);
    };
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [svcOpen]);

  const linkClass = (href) =>
    `rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
      pathname === href || (href === "/services" && pathname.startsWith("/services"))
        ? "text-white"
        : "text-ink2 hover:text-white"
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-line bg-ink/80 backdrop-blur-xl"
          : "border-white/5 bg-ink/40 backdrop-blur-md"
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between gap-4">
        <Link href="/" aria-label="Lumivance home" className="flex-none">
          <Wordmark markClassName="h-8 w-auto" textClassName="text-lg" />
        </Link>

        {/* Desktop: horizontal menu bar */}
        <ul className="hidden flex-1 items-center justify-center gap-0.5 sm:flex">
          {/* Services with dropdown */}
          <li
            className="relative"
            ref={svcRef}
            onMouseEnter={() => setSvcOpen(true)}
            onMouseLeave={() => setSvcOpen(false)}
          >
            <Link
              href="/services"
              aria-expanded={svcOpen}
              aria-haspopup="true"
              onFocus={() => setSvcOpen(true)}
              className={`inline-flex items-center gap-1.5 ${linkClass("/services")}`}
            >
              Services
              <Chevron open={svcOpen} />
            </Link>

            {/* Dropdown panel */}
            <div
              className={`absolute left-0 top-full pt-3 transition-all duration-200 ${
                svcOpen
                  ? "pointer-events-auto translate-y-0 opacity-100"
                  : "pointer-events-none -translate-y-1 opacity-0"
              }`}
            >
              <div className="w-[560px] max-w-[86vw] rounded-2xl border border-line bg-ink-panel/95 p-3 shadow-card backdrop-blur-xl">
                <div className="grid grid-cols-2 gap-1">
                  {channels.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/services/${c.slug}`}
                      className="rounded-xl px-3.5 py-2.5 transition-colors hover:bg-white/[0.06]"
                    >
                      <span className="block text-sm font-medium text-white">{c.name}</span>
                      <span className="mt-0.5 block text-xs text-ink2">{c.menuDesc}</span>
                    </Link>
                  ))}
                </div>
                <Link
                  href="/services"
                  className="mt-2 flex items-center justify-between rounded-xl border-t border-line px-3.5 pb-1 pt-3 text-sm font-semibold text-white/80 transition-colors hover:text-spark"
                >
                  All services
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
          </li>

          {/* Remaining links */}
          {nav
            .filter((item) => item.href !== "/services")
            .map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={linkClass(item.href)}>
                  {item.label}
                </Link>
              </li>
            ))}
        </ul>

        <div className="flex flex-none items-center gap-2">
          <Link href="/contact" className="btn-grad hidden !px-5 !py-2.5 min-[900px]:inline-flex">
            Book a call
          </Link>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-line bg-white/[0.03] text-white sm:hidden"
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
      <div className={`fixed inset-x-0 top-16 bottom-0 z-40 sm:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}>
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-ink/70 backdrop-blur-sm transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
        />
        <div
          className={`absolute inset-x-4 top-4 max-h-[calc(100%-2rem)] origin-top overflow-y-auto rounded-3xl glass p-4 transition-all duration-300 ${
            open ? "translate-y-0 scale-100 opacity-100" : "-translate-y-3 scale-95 opacity-0"
          }`}
        >
          <ul className="flex flex-col">
            {/* Services expandable */}
            <li>
              <button
                type="button"
                aria-expanded={mSvcOpen}
                onClick={() => setMSvcOpen((v) => !v)}
                className="flex w-full cursor-pointer items-center justify-between rounded-2xl px-4 py-3.5 text-base font-medium text-white/90 transition-colors hover:bg-white/[0.05]"
              >
                Services
                <Chevron open={mSvcOpen} />
              </button>
              <div
                className="grid transition-all duration-300"
                style={{ gridTemplateRows: mSvcOpen ? "1fr" : "0fr" }}
              >
                <ul className="overflow-hidden pl-3">
                  {channels.map((c) => (
                    <li key={c.slug}>
                      <Link
                        href={`/services/${c.slug}`}
                        className="block rounded-xl px-4 py-2.5 text-sm text-white/75 transition-colors hover:bg-white/[0.05] hover:text-white"
                      >
                        {c.name}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      href="/services"
                      className="block rounded-xl px-4 py-2.5 text-sm font-semibold text-white/85 transition-colors hover:bg-white/[0.05]"
                    >
                      All services
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            {nav
              .filter((item) => item.href !== "/services")
              .map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block rounded-2xl px-4 py-3.5 text-base font-medium text-white/90 transition-colors hover:bg-white/[0.05]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
          </ul>
          <Link href="/contact" className="btn-grad mt-2 w-full">
            Book a call
          </Link>
        </div>
      </div>
    </header>
  );
}
