"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Emblem from "@/components/Emblem";
import { usePathname } from "next/navigation";
import { cta, nav } from "@/lib/site";

// A plain bar that stays put while you read: the name, five links, one button.
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-black/[0.08] bg-white/80 backdrop-blur-xl backdrop-saturate-150">
      <nav className="wrap flex h-12 items-center justify-between gap-6">
        <Link href="/" className="wordmark inline-flex items-center gap-1.5 text-[19px]" aria-label="Lumivance home">
          <Emblem className="h-6 w-7 flex-none" />
          Lumivance
        </Link>

        <ul className="hidden items-center gap-8 text-[13px] text-ink/80 lg:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="transition-colors hover:text-accent">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link href={cta.href} className="hidden rounded-full bg-accent px-3.5 py-1.5 text-[13px] font-medium text-white transition-colors hover:bg-[#362c80] lg:inline-block">
          {cta.short}
        </Link>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="-mr-2 px-2 py-2 text-[15px] font-medium lg:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-rule lg:hidden">
          <ul className="wrap py-2">
            {nav.map((item) => (
              <li key={item.href} className="border-b border-rule last:border-b-0">
                <Link href={item.href} onClick={() => setOpen(false)} className="display block py-3.5 text-[24px]">
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
