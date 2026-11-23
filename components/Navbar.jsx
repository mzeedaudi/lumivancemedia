"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Emblem from "@/components/Emblem";
import { usePathname } from "next/navigation";
import { cta, nav } from "@/lib/site";

// A plain bar that stays put while you read: the name, the main links, one
// button. Resources opens a small menu on hover or focus; the word itself
// still goes to the Resources page, so touch screens lose nothing.
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
    setMenu(null);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-black/[0.08] bg-white/80 backdrop-blur-xl backdrop-saturate-150">
      <nav className="wrap flex h-12 items-center justify-between gap-6">
        <Link href="/" className="wordmark inline-flex items-center gap-1.5 text-[19px]" aria-label="Lumivance home">
          <Emblem className="h-6 w-7 flex-none" />
          Lumivance
        </Link>

        <ul className="hidden items-center gap-8 text-[13px] text-ink/80 lg:flex">
          {nav.map((item) =>
            item.children ? (
              <DropItem key={item.href} item={item} open={menu === item.label} setOpen={(v) => setMenu(v ? item.label : null)} />
            ) : (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-accent">
                  {item.label}
                </Link>
              </li>
            )
          )}
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
        <div id="mobile-menu" className="max-h-[calc(100dvh-3rem)] overflow-y-auto border-t border-rule lg:hidden">
          <ul className="wrap py-2">
            {nav.map((item) => (
              <li key={item.href} className="border-b border-rule last:border-b-0">
                <Link href={item.href} onClick={() => setOpen(false)} className="display block py-3.5 text-[24px]">
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="-mt-1 pb-3">
                    {item.children.map((c) => (
                      <li key={c.href}>
                        <Link href={c.href} onClick={() => setOpen(false)} className="block py-1.5 pl-4 text-[17px] text-graphite">
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
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

// A menu item with a few pages under it. Opens while the pointer or keyboard
// focus is inside it; Escape closes it and returns focus to the toggle.
function DropItem({ item, open, setOpen }) {
  const id = `menu-${item.label.toLowerCase()}`;
  return (
    <li
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setOpen(false);
      }}
      onKeyDown={(e) => {
        if (e.key === "Escape" && open) {
          setOpen(false);
          e.currentTarget.querySelector("button")?.focus();
        }
      }}
    >
      <span className="flex items-center gap-1">
        <Link href={item.href} className="transition-colors hover:text-accent">
          {item.label}
        </Link>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={id}
          aria-label={`${item.label} menu`}
          onClick={() => setOpen(!open)}
          className="-mr-1 p-1 transition-colors hover:text-accent"
        >
          <svg viewBox="0 0 10 6" aria-hidden="true" className={`h-1.5 w-2.5 transition-transform ${open ? "rotate-180" : ""}`}>
            <path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </span>
      {/* The padding bridges the gap under the bar, so the pointer can travel to the menu. */}
      <div id={id} className={`absolute left-1/2 top-full w-[300px] -translate-x-1/2 pt-3 ${open ? "" : "hidden"}`}>
        <ul className="rounded-2xl border border-black/[0.08] bg-white p-2 shadow-[0_12px_40px_rgba(0,0,0,0.12)]">
          {item.children.map((c) => (
            <li key={c.href}>
              <Link href={c.href} className="group block rounded-xl px-4 py-3 transition-colors hover:bg-tile focus-visible:bg-tile">
                <span className="block text-[15px] font-semibold text-ink group-hover:text-accent">{c.label}</span>
                {c.text && <span className="meta mt-0.5 block text-[13px]">{c.text}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}
