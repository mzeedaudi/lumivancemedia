// A blog post's flash card: the post's main topic, set large on one of three
// brand colors, with the emblem's slanted bars and orange dot as decoration.
// It's type rather than a picture, so it stays sharp at any size and needs no
// image per post. Each category has its own color (see lib/blog.js).
// Decorative: the post's real title sits beside or under it as text. `foot`
// replaces the reading time, for a card that isn't a single post.

const TONES = {
  accent: { card: "bg-accent text-white", tag: "text-white/70", rule: "border-white/20", foot: "text-white/70", bars: ["#5a4fb4", "#6c62c2", "#5f56a8"] },
  ink: { card: "bg-ink text-white", tag: "text-white/60", rule: "border-white/15", foot: "text-white/60", bars: ["#2c2c30", "#38343f", "#2f2e36"] },
  lilac: { card: "bg-[#e7e4f8] text-ink", tag: "text-accent", rule: "border-accent/15", foot: "text-graphite", bars: ["#d9d4f4", "#cfc8f1", "#dcd8ee"] },
};

const SIZES = {
  sm: { pad: "p-5", topic: "text-[24px] sm:text-[26px]", bars: "w-[46%]" },
  lg: { pad: "p-7 sm:p-9", topic: "text-[34px] sm:text-[44px]", bars: "w-[44%]" },
};

const BAR = { x: -29.5, y: -98, width: 59, height: 196 };
const at = (x) => `translate(${x} 185) rotate(33)`;

export default function FlashCard({ post, size = "sm", className = "" }) {
  const t = TONES[post.tone] ?? TONES.accent;
  const s = SIZES[size];
  return (
    <div
      aria-hidden="true"
      className={`relative flex aspect-[4/3] flex-col overflow-hidden rounded-[22px] ${t.card} ${s.pad} ${className}`}
    >
      <svg viewBox="56 72 288 256" className={`pointer-events-none absolute -top-[12%] right-[4%] ${s.bars}`} focusable="false">
        <rect {...BAR} transform={at(143.5)} fill={t.bars[0]} />
        <rect {...BAR} transform={at(195.5)} fill={t.bars[1]} />
        <rect {...BAR} transform={at(245.5)} fill={t.bars[2]} />
        <circle cx="319" cy="295" r="16" fill="#E2643A" />
      </svg>

      <span className={`tag relative ${t.tag}`}>{post.category}</span>
      <p className={`display relative mt-auto max-w-[92%] text-balance ${s.topic}`}>{post.topic}</p>
      <div className={`relative mt-4 flex items-center justify-between border-t pt-3 text-[12px] font-medium ${t.rule} ${t.foot}`}>
        <span className="wordmark text-[13px]">Lumivance</span>
        <span>{post.foot ?? `${post.minutes} min read`}</span>
      </div>
    </div>
  );
}
