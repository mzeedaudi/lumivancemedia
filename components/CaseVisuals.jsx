// Category-driven visuals for case-study cards:
//  - CaseArt: a large, subtle line illustration themed to the category
//  - BrandBadge: a monogram "logo" tinted to the category
// Colours vary per category to give the grid life while staying on-theme.

const G = (...d) => d.map((dd, i) => <path key={i} d={dd} />);

const CATS = {
  "B2B SaaS": { from: "#818CF8", to: "#8B5CF6", icon: () => G("M12 3l9 5-9 5-9-5 9-5Z", "M3 12l9 5 9-5", "M3 16l9 5 9-5") },
  "Consumer App": { from: "#A78BFA", to: "#D946EF", icon: () => (<>{G("M11 18h2")}<rect x="7" y="2.5" width="10" height="19" rx="2.5" /></>) },
  Fintech: { from: "#34D399", to: "#10B981", icon: () => (<>{G("M2.5 9.5h19", "M6 14.5h4")}<rect x="2.5" y="5" width="19" height="14" rx="2.5" /></>) },
  "Dev Tools": { from: "#38BDF8", to: "#6366F1", icon: () => G("M8 7l-5 5 5 5", "M16 7l5 5-5 5", "M13.5 5l-3 14") },
  Productivity: { from: "#22D3EE", to: "#06B6D4", icon: () => G("M4 7.5l1.6 1.6L9 5.6", "M4 16.5l1.6 1.6L9 14.6", "M13 8h7", "M13 17h7") },
  Healthtech: { from: "#FB7185", to: "#F43F5E", icon: () => G("M12 20S4.5 15.5 4.5 10.3A3.8 3.8 0 0 1 12 8a3.8 3.8 0 0 1 7.5 2.3C19.5 15.5 12 20 12 20Z", "M6.5 12h2l1.4-2 2.2 4.2L13.5 12h4") },
  "AI / ML": { from: "#E879F9", to: "#8B5CF6", icon: () => (<>{G("M7.6 8.4l3 6.6", "M16.4 8.4l-3 6.6", "M8.2 7h7.6")}<circle cx="6" cy="7" r="2" /><circle cx="18" cy="7" r="2" /><circle cx="12" cy="17" r="2" /></>) },
  Cloud: { from: "#38BDF8", to: "#0EA5E9", icon: () => G("M7 18h10a4 4 0 0 0 .5-7.97A6 6 0 0 0 5.5 11 3.5 3.5 0 0 0 7 18Z") },
  Cybersecurity: { from: "#2DD4BF", to: "#14B8A6", icon: () => G("M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z", "M9 12l2 2 4-4") },
  Analytics: { from: "#FBBF24", to: "#F59E0B", icon: () => G("M5 20V11", "M10 20V5", "M15 20v-6", "M20 20V8") },
  "HR Tech": { from: "#818CF8", to: "#6366F1", icon: () => (<>{G("M3.5 19a4.5 4.5 0 0 1 9 0", "M14.5 18.5a4 4 0 0 1 6 0")}<circle cx="8" cy="8" r="2.6" /><circle cx="17" cy="8.5" r="2.2" /></>) },
  EdTech: { from: "#FBBF24", to: "#FB923C", icon: () => G("M3 9l9-4 9 4-9 4-9-4Z", "M7 11v4c0 1.2 2.4 2.4 5 2.4s5-1.2 5-2.4v-4", "M21 9v4") },
  Marketplace: { from: "#A78BFA", to: "#8B5CF6", icon: () => G("M4 9l1-4h14l1 4", "M4 9v10h16V9", "M9.5 19v-5h5v5") },
  Crypto: { from: "#F4C77B", to: "#F59E0B", icon: () => (<>{G("M10 7.5v9", "M10 7.5h3.2a2 2 0 0 1 0 4H10m0 0h3.7a2 2 0 0 1 0 4H10")}<circle cx="12" cy="12" r="8.5" /></>) },
  MarTech: { from: "#F472B6", to: "#EC4899", icon: () => G("M4 10v4l10 4V6L4 10Z", "M14 8.5a3.5 3.5 0 0 1 0 7", "M6.5 14.5V17a2 2 0 0 0 4 0v-1") },
  "E-commerce": { from: "#34D399", to: "#10B981", icon: () => (<>{G("M3 4h2l2.4 10.5h10L19.5 8H6")}<circle cx="9.5" cy="19" r="1.3" /><circle cx="16.5" cy="19" r="1.3" /></>) },
  PropTech: { from: "#60A5FA", to: "#3B82F6", icon: () => G("M5 21V5a1.5 1.5 0 0 1 1.5-1.5H17A1.5 1.5 0 0 1 18.5 5v16", "M3.5 21h17", "M9 7.5h2M14 7.5h0.5M9 11.5h2M14 11.5h0.5M9 15.5h2M14 15.5h0.5") },
  Travel: { from: "#22D3EE", to: "#0EA5E9", icon: () => G("M21 3L3 10.2l6.5 2.3L12 19l3.2-5.4L21 3Z", "M9.5 12.5l3.2-2.8") },
  Streaming: { from: "#E879F9", to: "#D946EF", icon: () => (<>{G("M10.2 8.5l5.6 3.5-5.6 3.5v-7Z")}<circle cx="12" cy="12" r="8.5" /></>) },
};

const DEFAULT = {
  from: "#8B5CF6",
  to: "#D946EF",
  icon: () => G("M12 3l2.2 5.6L20 11l-5.8 2.4L12 19l-2.2-5.6L4 11l5.8-2.4L12 3Z"),
};

export function catOf(category) {
  return CATS[category] || DEFAULT;
}

export function CaseArt({ category, uid, className = "" }) {
  const { from, to, icon } = catOf(category);
  const id = `cg-${uid}`;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
      stroke={`url(#${id})`}
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <defs>
        <linearGradient id={id} x1="2" y1="3" x2="22" y2="21" gradientUnits="userSpaceOnUse">
          <stop stopColor={from} />
          <stop offset="1" stopColor={to} />
        </linearGradient>
      </defs>
      {icon()}
    </svg>
  );
}

export function BrandBadge({ name, category, className = "" }) {
  const { from, to } = catOf(category);
  const initials = name
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  return (
    <span
      className={`grid h-10 w-10 flex-none place-items-center rounded-xl font-display text-sm font-semibold text-white ring-1 ring-white/20 ${className}`}
      style={{ backgroundImage: `linear-gradient(135deg, ${from}, ${to})` }}
      aria-hidden="true"
    >
      {initials}
    </span>
  );
}
