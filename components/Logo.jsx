// Lumivance mark — a sun sitting on the horizon, echoing the studio's hero film.
// Vector so it stays crisp at any size. `uid` keeps gradient ids unique when
// the mark appears more than once on a page (navbar + footer).
export default function Logo({ className = "h-8 w-auto", uid = "a" }) {
  const g = `lv-sun-${uid}`;
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      role="img"
      aria-label="Lumivance"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={g} x1="12" y1="8" x2="36" y2="34" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFC068" />
          <stop offset="1" stopColor="#FF7A1A" />
        </linearGradient>
      </defs>
      {/* sun */}
      <circle cx="24" cy="21" r="12.5" fill={`url(#${g})`} />
      {/* horizon slices the sun */}
      <rect x="2" y="25" width="44" height="3.2" fill="#0B0907" />
      {/* dune lines */}
      <rect x="4" y="31" width="40" height="2.4" rx="1.2" fill="#F4EDE3" fillOpacity="0.9" />
      <rect x="11" y="37" width="26" height="2.4" rx="1.2" fill="#F4EDE3" fillOpacity="0.4" />
    </svg>
  );
}

// Full lockup: mark + wordmark (+ optional tagline). Navbar & footer.
export function Wordmark({
  markClassName = "h-8 w-auto",
  textClassName = "text-lg",
  tagline = false,
  uid = "a",
}) {
  return (
    <span className="flex items-center gap-2.5">
      <Logo className={markClassName} uid={uid} />
      <span className="flex flex-col leading-none">
        <span className={`font-display font-bold tracking-tight text-bone ${textClassName}`}>
          Lumivance
        </span>
        {tagline && (
          <span className="mt-1.5 text-[0.58rem] font-semibold uppercase tracking-[0.3em] text-sand">
            AI Commercial Studio
          </span>
        )}
      </span>
    </span>
  );
}
