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
        // Warm cinematic black — tinted toward the hero film's amber, never pure #000
        ink: {
          DEFAULT: "#0B0907", // page background
          soft: "#14100D",    // raised surface / cards
          panel: "#1C1713",   // elevated panel
        },
        bone: "#F4EDE3",  // primary text
        sand: "#B9A88F",  // muted text
        line: "rgba(244,237,227,0.10)",
        ember: "#FF7A1A", // hot CTA
        amber: "#F2A63A", // signature accent — the sun in the film
        gold: "#E8C57C",  // soft highlight
        dusk: "#6B3421",  // deep burnt shadow tone
        // Aliases kept so shared components (FAQ, legal pages) need no edits
        ink2: "#B9A88F",
        spark: "#F2A63A",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-bricolage)", "var(--font-inter)", "sans-serif"],
        serif: ["var(--font-instrument)", "Georgia", "serif"],
      },
      letterSpacing: {
        tightest: "-0.045em",
      },
      maxWidth: {
        container: "1240px",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(244,237,227,0.06), 0 30px 80px -20px rgba(242,166,58,0.35)",
        card: "0 1px 0 0 rgba(255,255,255,0.04) inset, 0 24px 60px -30px rgba(0,0,0,0.85)",
        ember: "0 14px 44px -12px rgba(255,122,26,0.6)",
      },
      keyframes: {
        "sun-drift": {
          "0%, 100%": { transform: "translate3d(-3%, 0, 0) scale(1)" },
          "50%": { transform: "translate3d(3%, 2%, 0) scale(1.08)" },
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
        "sun-drift": "sun-drift 22s ease-in-out infinite",
        float: "float 7s ease-in-out infinite",
        marquee: "marquee 42s linear infinite",
        shimmer: "shimmer 6s linear infinite",
        "spin-slow": "spin-slow 22s linear infinite",
      },
    },
  },
  plugins: [],
};
