"use client";

import { useState } from "react";
import { faqs } from "@/lib/site";

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <div className="mx-auto max-w-3xl divide-y divide-line overflow-hidden rounded-3xl border border-line bg-ink-soft/60">
      {faqs.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition-colors hover:bg-white/[0.02]"
            >
              <span className="font-display text-base font-medium text-white sm:text-lg">
                {item.q}
              </span>
              <span
                className={`grid h-8 w-8 flex-none place-items-center rounded-full border border-line text-white transition-transform duration-300 ${
                  isOpen ? "rotate-45 bg-white/[0.06]" : ""
                }`}
                aria-hidden="true"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
            </button>
            <div
              className="grid transition-all duration-300 ease-out"
              style={{
                gridTemplateRows: isOpen ? "1fr" : "0fr",
              }}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 text-sm leading-relaxed text-ink2 sm:text-base">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
