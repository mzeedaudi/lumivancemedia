// Logo resolution order for a case-study client:
//   1. `logoSrc` — an official logo file in public/logos/. Use this for real
//      clients once you have written permission to display their mark.
//   2. A bespoke wordmark from FLAGSHIP, for the featured case studies.
//   3. An icon from LIBRARY + the client name set in the display face.
//   4. A monogram tile, if a client somehow has none of the above.
// Colour is inherited — callers set `text-white`, `text-white/40`, etc.

const S = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const Icon = ({ children }) => (
  <svg viewBox="0 0 24 24" {...S} aria-hidden="true">
    {children}
  </svg>
);

/* ------------------------- flagship: icon + wordmark ----------------------- */

const FLAGSHIP = {
  sitewright: {
    icon: (
      <Icon>
        <rect x="3" y="4" width="18" height="16" rx="3" />
        <path d="M3 9h18" />
        <circle cx="6.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
        <circle cx="9.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
        <path d="M7 13h6M7 16.5h9" />
      </Icon>
    ),
    word: <span className="font-display text-lg font-bold lowercase tracking-tight">sitewright</span>,
  },
  brightvault: {
    icon: (
      <Icon>
        <path d="M12 3l7 3v5c0 4.4-2.9 7.3-7 8.7C7.9 18.3 5 15.4 5 11V6l7-3Z" />
        <circle cx="12" cy="10" r="2" />
        <path d="M12 12v3.5" />
      </Icon>
    ),
    word: <span className="font-display text-lg font-semibold tracking-tight">Brightvault</span>,
  },
  trailform: {
    icon: (
      <Icon>
        <path d="M3 18L9 8l4 6 3-4 5 8" />
        <circle cx="17.5" cy="5.5" r="1.8" />
      </Icon>
    ),
    word: <span className="font-display text-lg font-medium lowercase tracking-[0.08em]">trailform</span>,
  },
  hexlab: {
    icon: (
      <Icon>
        <path d="M12 2.5l8 4.6v9.8l-8 4.6-8-4.6V7.1l8-4.6Z" />
        <circle cx="12" cy="12" r="2.2" fill="currentColor" stroke="none" />
      </Icon>
    ),
    word: <span className="font-display text-base font-bold uppercase tracking-[0.18em]">Hexlab</span>,
  },
  skillcove: {
    icon: (
      <Icon>
        <path d="M12 6c-2-1.6-5-2-8-1.6V19c3-.4 6 0 8 1.6 2-1.6 5-2 8-1.6V4.4C17 4 14 4.4 12 6Z" />
        <path d="M12 6v14.6" />
      </Icon>
    ),
    word: <span className="font-display text-lg font-semibold tracking-tight">Skillcove</span>,
  },
  parcelio: {
    icon: (
      <Icon>
        <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3Z" />
        <path d="M4 7.5l8 4.5 8-4.5M12 12v9" />
      </Icon>
    ),
    word: <span className="font-display text-lg font-bold lowercase tracking-tight">parcelio</span>,
  },
};

/* --------------------------- library: icon marks --------------------------- */

const LIBRARY = {
  hyperloop: (
    <Icon>
      <path d="M20.5 12a8.5 8.5 0 1 1-2.9-6.4" />
      <path d="M21 3.5v4h-4" />
    </Icon>
  ),
  paperplane: (
    <Icon>
      <path d="M21 3L3 10.2l6.5 2.3L12 19l3.2-5.4L21 3Z" />
      <path d="M9.5 12.5l3.2-2.8" />
    </Icon>
  ),
  quanta: (
    <Icon>
      <circle cx="12" cy="12" r="2.2" fill="currentColor" stroke="none" />
      <ellipse cx="12" cy="12" rx="9" ry="4" />
      <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(60 12 12)" />
    </Icon>
  ),
  lumen: (
    <Icon>
      <path d="M12 20S4.5 15.5 4.5 10.3A3.8 3.8 0 0 1 12 8a3.8 3.8 0 0 1 7.5 2.3C19.5 15.5 12 20 12 20Z" />
      <path d="M6.5 12h2l1.4-2 2.2 4.2L13.5 12h4" />
    </Icon>
  ),
  stacked: (
    <Icon>
      <path d="M12 3l9 5-9 5-9-5 9-5Z" />
      <path d="M3 12l9 5 9-5M3 16l9 5 9-5" />
    </Icon>
  ),
  orbital: (
    <Icon>
      <circle cx="12" cy="12" r="4.5" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(-24 12 12)" />
    </Icon>
  ),
  nimbus: (
    <Icon>
      <path d="M7 18h10a4 4 0 0 0 .5-7.97A6 6 0 0 0 5.5 11 3.5 3.5 0 0 0 7 18Z" />
    </Icon>
  ),
  vertex: (
    <Icon>
      <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" />
      <path d="M9 12l2 2 4-4" />
    </Icon>
  ),
  fathom: (
    <Icon>
      <path d="M3 6h18M5.5 11h13M8 16h8M10.5 20.5h3" />
    </Icon>
  ),
  cadence: (
    <Icon>
      <path d="M10 3h4l4 18H6L10 3Z" />
      <path d="M7.5 15h9" />
      <path d="M16 6.5L9 14" />
    </Icon>
  ),
  meridian: (
    <Icon>
      <circle cx="12" cy="12" r="9" />
      <path d="M3.5 9h17M3.5 15h17" />
      <path d="M12 3c2.5 2.6 3.8 5.6 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3Z" />
    </Icon>
  ),
  sprout: (
    <Icon>
      <path d="M12 21v-8" />
      <path d="M12 13c0-3.3 2.7-6 6-6 0 3.3-2.7 6-6 6Z" />
      <path d="M12 15c0-2.8-2.2-5-5-5 0 2.8 2.2 5 5 5Z" />
    </Icon>
  ),
  tessera: (
    <Icon>
      <rect x="3.5" y="3.5" width="7" height="7" rx="1.5" />
      <rect x="13.5" y="3.5" width="7" height="7" rx="1.5" />
      <rect x="3.5" y="13.5" width="7" height="7" rx="1.5" />
      <rect x="13.5" y="13.5" width="7" height="7" rx="1.5" />
    </Icon>
  ),
  halcyon: (
    <Icon>
      <path d="M3 9c2.3-2.4 4.6-2.4 6.9 0s4.6 2.4 6.9 0 4.6-2.4 6.9 0" />
      <path d="M3 15c2.3-2.4 4.6-2.4 6.9 0s4.6 2.4 6.9 0 4.6-2.4 6.9 0" />
    </Icon>
  ),
  ledgerly: (
    <Icon>
      <path d="M4 4.5h13a2 2 0 0 1 2 2v13H6a2 2 0 0 1-2-2v-13Z" />
      <path d="M4 17.5a2 2 0 0 1 2-2h13" />
      <path d="M8 8.5h7M8 11.5h5" />
    </Icon>
  ),
  northpeak: (
    <Icon>
      <path d="M2.5 19l6-11 4 6.5 2.5-4L21.5 19H2.5Z" />
      <path d="M6.6 12.4h3.6" />
    </Icon>
  ),
  pulse: (
    <Icon>
      <path d="M2.5 12h4l2.5-6 4.5 12 2.5-6h5.5" />
    </Icon>
  ),
  forge: (
    <Icon>
      <path d="M3 20h11" />
      <path d="M5.5 20l1.5-7h6l1.5 7" />
      <path d="M15 6.5l6-2.5-2 5 3 .5-6 4 1-4.5-3-.5Z" />
    </Icon>
  ),
  "aurora-pay": (
    <Icon>
      <rect x="2.5" y="6" width="19" height="13" rx="2.5" />
      <path d="M2.5 10.5h19" />
      <path d="M6 15h4" />
    </Icon>
  ),
  beacon: (
    <Icon>
      <path d="M9.5 21l1.2-11h2.6l1.2 11" />
      <path d="M9 10h6" />
      <circle cx="12" cy="6.5" r="2" />
      <path d="M5 4.5l2.5 2M19 4.5l-2.5 2" />
    </Icon>
  ),
  verdant: (
    <Icon>
      <path d="M4.5 19.5C3 13 7 5.5 19.5 4.5c1 12.5-6.5 16.5-13 15Z" />
      <path d="M9 15c2.5-3.5 5.5-5.7 8.5-6.8" />
    </Icon>
  ),
  atlas: (
    <Icon>
      <path d="M5 21V5.5a1.5 1.5 0 0 1 1.5-1.5H14a1.5 1.5 0 0 1 1.5 1.5V21" />
      <path d="M15.5 10.5H19a1.5 1.5 0 0 1 1.5 1.5v9" />
      <path d="M3.5 21h17M8.5 8h3M8.5 12h3M8.5 16h3" />
    </Icon>
  ),
  synth: (
    <Icon>
      <path d="M2.5 12h2.5l2-5 3 10 2.5-8 2 6 2-3h5" />
    </Icon>
  ),
  harbor: (
    <Icon>
      <circle cx="12" cy="4.8" r="2" />
      <path d="M12 6.8V21" />
      <path d="M7.5 10h9" />
      <path d="M4.5 13.5c0 4.5 3.5 7.5 7.5 7.5s7.5-3 7.5-7.5" />
    </Icon>
  ),
  kindred: (
    <Icon>
      <circle cx="8.5" cy="12" r="5.5" />
      <circle cx="15.5" cy="12" r="5.5" />
    </Icon>
  ),
};

/* -------------------------------- component -------------------------------- */

export default function BrandLogo({ c, size = "md", className = "" }) {
  const iconCls = size === "lg" ? "h-8 w-8" : "h-6 w-6";
  const wrap = `inline-flex items-center gap-2 ${className}`;

  // 1. Official logo asset — takes precedence over anything drawn here.
  if (c.logoSrc) {
    return (
      <span className={`inline-flex items-center ${className}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={c.logoSrc}
          alt={`${c.client} logo`}
          className={size === "lg" ? "h-8 w-auto" : "h-6 w-auto"}
        />
      </span>
    );
  }

  // 2. Flagship wordmark.
  const flagship = FLAGSHIP[c.id];
  if (flagship) {
    return (
      <span className={wrap}>
        <span className={`${iconCls} flex-none`}>{flagship.icon}</span>
        {flagship.word}
      </span>
    );
  }

  // 3. Library icon + name.
  const libIcon = LIBRARY[c.id];
  if (libIcon) {
    return (
      <span className={wrap}>
        <span className={`${iconCls} flex-none`}>{libIcon}</span>
        <span className="font-display text-lg font-medium tracking-tight">{c.client}</span>
      </span>
    );
  }

  // 4. Monogram fallback.
  const initials = c.client
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  return (
    <span className={wrap}>
      <span className="grid h-6 w-6 flex-none place-items-center rounded-md font-display text-[10px] font-bold ring-1 ring-current">
        {initials}
      </span>
      <span className="font-display text-base font-semibold tracking-tight">{c.client}</span>
    </span>
  );
}
