"use client";

import { useId, useState } from "react";

const whole = (n) => Math.max(0, Math.floor(n)).toLocaleString("en-US");

// "Do the maths": what the same budget buys if the cost of each customer
// falls. It's arithmetic on the visitor's own numbers, and says so.
export default function Calculator({ unit, units, budget = 20000, cost = 40, cut = 25 }) {
  const id = useId();
  const [b, setB] = useState(budget);
  const [c, setC] = useState(cost);
  const [r, setR] = useState(cut);

  const now = c > 0 ? b / c : 0;
  const lower = c * (1 - r / 100);
  const after = lower > 0 ? b / lower : 0;

  const field = "mt-1.5 w-full border border-rule bg-white px-3 py-2.5 text-[17px] focus:border-accent";

  return (
    <div className="border border-rule bg-white">
      <div className="grid gap-5 p-5 sm:grid-cols-3 sm:p-6">
        <label htmlFor={`${id}-b`} className="block text-[15px] font-medium">
          Monthly ad budget (USD)
          <input id={`${id}-b`} type="number" min="0" step="500" value={b} onChange={(e) => setB(Number(e.target.value))} className={field} />
        </label>
        <label htmlFor={`${id}-c`} className="block text-[15px] font-medium">
          Cost per {unit} now (USD)
          <input id={`${id}-c`} type="number" min="1" step="1" value={c} onChange={(e) => setC(Number(e.target.value))} className={field} />
        </label>
        <label htmlFor={`${id}-r`} className="block text-[15px] font-medium">
          If that cost fell by {r}%
          <input id={`${id}-r`} type="range" min="5" max="50" step="5" value={r} onChange={(e) => setR(Number(e.target.value))} className="mt-4 w-full accent-[#43379A]" />
        </label>
      </div>
      <dl className="grid grid-cols-3 border-t border-rule" aria-live="polite">
        <div className="p-5 sm:p-6">
          <dt className="meta">{units} a month now</dt>
          <dd className="display mt-1 text-[30px] sm:text-[40px]">{whole(now)}</dd>
        </div>
        <div className="border-l border-rule p-5 sm:p-6">
          <dt className="meta">At the lower cost</dt>
          <dd className="display mt-1 text-[30px] sm:text-[40px]">{whole(after)}</dd>
        </div>
        <div className="border-l border-rule p-5 sm:p-6">
          <dt className="meta">Extra each month</dt>
          <dd className="display mt-1 text-[30px] text-accent sm:text-[40px]">+{whole(after - now)}</dd>
        </div>
      </dl>
      <p className="meta border-t border-rule px-5 py-3 sm:px-6">Arithmetic on your numbers, not a forecast. Nobody can promise how far a cost will fall.</p>
    </div>
  );
}
