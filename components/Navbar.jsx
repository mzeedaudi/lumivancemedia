"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cta, nav } from "@/lib/site";

// A paper bar on a hairline rule that stays put while you read. The page is
// one argument, so the menu is four anchors and the one call to action.
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-paper">
      <nav className="wrap flex h-16 items-center justify-between gap-6">
        <Link href="/" className="wordmark text-[25px]" aria-label="Lumivance home">
          Lumivance
        </Link>

        <ul className="hidden items-center gap-8 font-display text-[15px] font-medium lg:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="transition-colors hover:text-tally">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href={cta.href}
          className="hidden border-b-2 border-tally pb-0.5 font-display text-[15px] font-bold transition-colors hover:text-tally lg:inline-block"
        >
          {cta.short}
        </Link>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="label -mr-2 px-2 py-3 lg:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-rule lg:hidden">
          <ul className="wrap py-2">
            {nav.map((item) => (
              <li key={item.href} className="border-b border-rule last:border-b-0">
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="display block py-4 text-[30px]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="wrap pb-6">
            <Link href={cta.href} onClick={() => setOpen(false)} className="btn w-full">
              {cta.label}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
