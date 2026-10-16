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
    <header className="sticky top-0 z-50 border-b border-rule bg-paper">
      <nav className="wrap flex h-16 items-center justify-between gap-6">
        <Link href="/" className="wordmark inline-flex items-center gap-2 text-[26px]" aria-label="Lumivance home">
          <Emblem className="h-8 w-9 flex-none" />
          Lumivance
        </Link>

        <ul className="hidden items-center gap-8 text-[15px] font-medium lg:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="transition-colors hover:text-accent">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link href={cta.href} className="link hidden text-[15px] lg:inline-block">
          {cta.short}
        </Link>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="-mr-2 px-2 py-3 text-[15px] font-semibold lg:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-rule lg:hidden">
          <ul className="wrap py-2">
            {nav.map((item) => (
              <li key={item.href} className="border-b border-rule last:border-b-0">
                <Link href={item.href} onClick={() => setOpen(false)} className="display block py-4 text-[26px]">
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
