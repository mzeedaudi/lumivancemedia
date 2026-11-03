"use client";

import { useState } from "react";

// A five-question self-check with a running score. Nothing is sent anywhere;
// it only changes the line underneath.
export default function Checklist({ items, verdicts }) {
  const [ticked, setTicked] = useState(() => items.map(() => false));
  const score = ticked.filter(Boolean).length;
  const verdict = score === items.length ? verdicts.ready : score >= items.length - 2 ? verdicts.close : verdicts.early;

  return (
    <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-10">
      <ul className="border-t border-rule">
        {items.map((it, i) => (
          <li key={it} className="border-b border-rule">
            <label className="flex cursor-pointer items-start gap-4 py-4">
              <input
                type="checkbox"
                checked={ticked[i]}
                onChange={() => setTicked((t) => t.map((v, j) => (j === i ? !v : v)))}
                className="mt-1 h-5 w-5 flex-none accent-[#43379A]"
              />
              <span>{it}</span>
            </label>
          </li>
        ))}
      </ul>
      <p className="tile p-7 lg:sticky lg:top-20" aria-live="polite">
        <span className="display block text-[56px] leading-none text-accent">
          {score} of {items.length}
        </span>
        <span className="mt-3 block text-[17px]">{verdict}</span>
      </p>
    </div>
  );
}
