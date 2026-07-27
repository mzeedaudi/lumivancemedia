// Lumivance mark — three overlapping tilted cards fading indigo → lavender → pale,
// with the signature coral dot. Vector recreation of the brand logo so it stays
// crisp at any size and sits cleanly on the dark theme.
export default function Logo({ className = "h-8 w-auto" }) {
  return (
    <svg
      viewBox="0 0 56 48"
      className={className}
      role="img"
      aria-label="Lumivance"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="lv-card" x1="10" y1="7" x2="26" y2="37" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5A54DC" />
          <stop offset="1" stopColor="#3E38BE" />
        </linearGradient>
      </defs>
      {/* back → front: dark, mid, pale */}
      <rect x="10.5" y="7" width="15" height="30" rx="4" fill="url(#lv-card)" transform="rotate(-24 18 22)" />
      <rect x="18.5" y="9" width="15" height="30" rx="4" fill="#B7B2EC" transform="rotate(-24 26 24)" />
      <rect x="26.5" y="11" width="15" height="30" rx="4" fill="#ECEBFA" fillOpacity="0.9" transform="rotate(-24 34 26)" />
      {/* coral dot */}
      <circle cx="45" cy="37" r="3.6" fill="#E2562A" />
    </svg>
  );
}

// Full lockup: mark + two-tone wordmark (+ optional tagline). Navbar & footer.
export function Wordmark({
  markClassName = "h-8 w-auto",
  textClassName = "text-lg",
  tagline = false,
}) {
  return (
    <span className="flex items-center gap-2.5">
      <Logo className={markClassName} />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display font-semibold lowercase tracking-tight ${textClassName}`}
        >
          {/* "lumi": white outline with a faint rainbow glow layered on top */}
          <span className="relative inline-block align-baseline">
            <span className="lumi-stroke">lumi</span>
            <span aria-hidden="true" className="lumi-rainbow absolute inset-0">
              lumi
            </span>
          </span>
          <span className="text-[#B7B2EC]">vance</span>
        </span>
        {tagline && (
          <span className="mt-1.5 text-[0.6rem] font-medium uppercase tracking-[0.3em] text-ink2">
            User Acquisition Studio
          </span>
        )}
      </span>
    </span>
  );
}
