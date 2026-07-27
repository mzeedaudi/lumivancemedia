/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,mdx}",
    "./components/**/*.{js,jsx,mdx}",
    "./lib/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep violet-indigo base — richer and warmer than the old near-black
        ink: {
          DEFAULT: "#150C33", // page background
          soft: "#1E1246",    // raised surface / cards
          panel: "#281959",   // elevated panel
        },
        line: "rgba(255,255,255,0.11)",
        brand: {
          indigo: "#6366F1",
          violet: "#8B5CF6",
          fuchsia: "#D946EF",
        },
        // Section band tints — give each stretch of the page its own hue
        band: {
          indigo: "#141338",
          plum: "#2A1140",
          teal: "#0C2B36",
          midnight: "#101540",
        },
        spark: "#F4C77B", // warm "luminance" champagne-gold accent
        aqua: "#2DD4BF",  // cool counterpoint to the violets
        ink2: "#B5AFD4",  // muted text, tuned for the violet base
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-sora)", "var(--font-inter)", "sans-serif"],
        serif: ["var(--font-instrument)", "Georgia", "serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      maxWidth: {
        container: "1200px",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255,255,255,0.06), 0 30px 80px -20px rgba(99,102,241,0.45)",
        card: "0 1px 0 0 rgba(255,255,255,0.04) inset, 0 24px 60px -30px rgba(0,0,0,0.8)",
      },
      keyframes: {
        "aurora-drift": {
          "0%, 100%": { transform: "translate3d(-4%, -2%, 0) scale(1)" },
          "50%": { transform: "translate3d(4%, 3%, 0) scale(1.15)" },
        },
        "aurora-drift-2": {
          "0%, 100%": { transform: "translate3d(3%, 2%, 0) scale(1.1)" },
          "50%": { transform: "translate3d(-3%, -3%, 0) scale(0.95)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "aurora-drift": "aurora-drift 18s ease-in-out infinite",
        "aurora-drift-2": "aurora-drift-2 22s ease-in-out infinite",
        float: "float 7s ease-in-out infinite",
        marquee: "marquee 38s linear infinite",
        shimmer: "shimmer 6s linear infinite",
        "spin-slow": "spin-slow 22s linear infinite",
      },
    },
  },
  plugins: [],
};
