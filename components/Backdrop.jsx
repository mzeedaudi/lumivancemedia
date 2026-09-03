// Fixed decorative background: a faint sunset glow bleeding from the top edge,
// a deep dusk anchor low-right, film grain, and a vignette that keeps long
// text legible. Pure CSS, transform/opacity only.
export default function Backdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink grain"
    >
      <div className="absolute left-1/2 top-[-34%] h-[70vh] w-[110vw] -translate-x-1/2 rounded-full bg-amber/[0.11] blur-[150px] animate-sun-drift" />
      <div className="absolute right-[-18%] bottom-[-22%] h-[52vh] w-[62vw] rounded-full bg-dusk/40 blur-[150px]" />
      <div className="absolute left-[-14%] top-[48%] h-[40vh] w-[46vw] rounded-full bg-ember/[0.05] blur-[150px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/0 via-ink/25 to-ink/85" />
    </div>
  );
}
