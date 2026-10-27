"use client";

import { useState } from "react";

// A five-question self-check with a running score. Nothing is sent anywhere;
// it only changes the line underneath.
export default function Checklist({ items, verdicts }) {
  const [ticked, setTicked] = useState(() => items.map(() => false));
  const score = ticked.filter(Boolean).length;
  const verdict = score === items.length ? verdicts.ready : score >= items.length - 2 ? verdicts.close : verdicts.early;

  return (
    <div>
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
      <p className="mt-5" aria-live="polite">
        <span className="display text-[28px]">
          {score} of {items.length}
        </span>
        <span className="mt-1 block text-graphite">{verdict}</span>
      </p>
    </div>
  );
}
