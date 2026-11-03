import { useId } from "react";

// The Lumivance emblem: three slanted bars and a dot, redrawn as vector
// from the supplied logo so it stays sharp at any size. Decorative only;
// the link it sits in carries the name.
const BAR = { x: -29.5, y: -98, width: 59, height: 196 };
const at = (x) => `translate(${x} 185) rotate(33)`;

export default function Emblem({ className = "" }) {
  // The emblem appears twice on a page (header and footer), so the clip id is unique per copy.
  const clip = useId();
  return (
    <svg viewBox="56 72 288 256" className={className} aria-hidden="true" focusable="false">
      <defs>
        <clipPath id={clip}>
          <rect {...BAR} transform={at(195.5)} />
        </clipPath>
      </defs>
      <rect {...BAR} transform={at(143.5)} fill="#43379A" />
      <rect {...BAR} transform={at(195.5)} fill="#8B80E8" />
      <rect {...BAR} transform={at(245.5)} fill="#908CB0" />
      <g clipPath={`url(#${clip})`}>
        <rect {...BAR} transform={at(245.5)} fill="#B2ACF0" />
      </g>
      <circle cx="319" cy="295" r="16" fill="#E2643A" />
    </svg>
  );
}
