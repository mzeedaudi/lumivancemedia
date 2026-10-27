/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,mdx}",
    "./components/**/*.{js,jsx,mdx}",
    "./lib/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      // Apple's palette with the emblem's purple as the accent.
      // Mirrors the custom properties in app/globals.css.
      colors: {
        paper: "#FFFFFF", // the page
        tile: "var(--tile)", // panels and tiles: light grey, or white inside a grey section
        ink: "#1D1D1F", // type and the one dark band
        graphite: "#6E6E73", // secondary text, 5.0:1 on white
        rule: "#D2D2D7", // hairlines
        accent: "#43379A", // the emblem's deep purple: buttons and links; white text on it is 9.3:1
        dot: "#E2643A", // the emblem's orange dot: the hero headline's full stop and placeholder labels
        "on-ink": "rgba(255,255,255,0.72)", // secondary text on ink
        "rule-ink": "rgba(255,255,255,0.16)", // hairlines on ink
        frame: "#F5F5F7", // behind media, before it loads
        "frame-ink": "#2A2A2D", // behind media on ink, before it loads
      },
      fontFamily: {
        display: ["var(--font-stack)"],
        sans: ["var(--font-stack)"],
        mono: ["ui-monospace", "SF Mono", "Menlo", "monospace"],
      },
      maxWidth: {
        wrap: "1240px",
        measure: "640px",
      },
    },
  },
  plugins: [],
};
