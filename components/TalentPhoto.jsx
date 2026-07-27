"use client";

import { useState } from "react";

// Headshot frame: grayscale by default, colours up on hover. Falls back to a
// gradient + role initials if the image file isn't present yet.
export default function TalentPhoto({ src, role, accent = "violet" }) {
  const [failed, setFailed] = useState(false);
  const initials = role
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const grad = {
    spark: "from-spark/40 to-amber-500/30",
    indigo: "from-brand-indigo/55 to-brand-violet/40",
    fuchsia: "from-brand-fuchsia/50 to-brand-violet/40",
    violet: "from-brand-violet/55 to-brand-fuchsia/40",
  }[accent];

  return (
    <div className="group/photo relative h-full w-full overflow-hidden rounded-2xl ring-1 ring-white/10">
      {!failed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={`${role} specialist at Lumivance`}
          loading="lazy"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover grayscale transition duration-500 group-hover/photo:grayscale-0"
        />
      ) : (
        <div
          className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${grad}`}
        >
          <span className="font-display text-2xl font-semibold tracking-tight text-white/90">
            {initials}
          </span>
        </div>
      )}
      {/* subtle bottom fade for chip legibility */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-ink/70 to-transparent" />
    </div>
  );
}
