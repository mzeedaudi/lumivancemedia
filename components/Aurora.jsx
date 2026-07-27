// Fixed decorative background: drifting multi-hue aurora + grain.
// Pure CSS, GPU-friendly (transform/opacity only).
export default function Aurora() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink grain"
    >
      {/* Warm violet crown */}
      <div className="absolute left-1/2 top-[-14%] h-[58vh] w-[85vw] -translate-x-1/2 rounded-full bg-brand-violet/45 blur-[120px] animate-aurora-drift" />
      {/* Fuchsia bloom, right */}
      <div className="absolute right-[-12%] top-[14%] h-[46vh] w-[52vw] rounded-full bg-brand-fuchsia/35 blur-[120px] animate-aurora-drift-2" />
      {/* Indigo mass, left */}
      <div className="absolute left-[-14%] top-[36%] h-[46vh] w-[50vw] rounded-full bg-brand-indigo/40 blur-[130px] animate-aurora-drift" />
      {/* Aqua counterpoint — keeps it from going all-purple */}
      <div className="absolute right-[6%] top-[58%] h-[40vh] w-[42vw] rounded-full bg-aqua/20 blur-[140px] animate-aurora-drift-2" />
      {/* Champagne warmth, low left */}
      <div className="absolute bottom-[-8%] left-1/4 h-[38vh] w-[44vw] rounded-full bg-spark/20 blur-[140px] animate-aurora-drift" />
      {/* Deep plum anchor, bottom right */}
      <div className="absolute bottom-[-14%] right-[10%] h-[36vh] w-[40vw] rounded-full bg-band-plum/70 blur-[130px] animate-aurora-drift-2" />

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.13) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage:
            "radial-gradient(ellipse 100% 60% at 50% 0%, #000 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 100% 60% at 50% 0%, #000 30%, transparent 75%)",
        }}
      />

      {/* Vignette keeps long-form text legible over the colour */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/35 via-ink/10 to-ink/85" />
    </div>
  );
}
