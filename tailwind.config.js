/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,mdx}",
    "./components/**/*.{js,jsx,mdx}",
    "./lib/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      // Warm off-white, near-black type and one forest-green accent.
      // Mirrors the custom properties in app/globals.css.
      colors: {
        paper: "#F4F1EA", // the page
        ink: "#15130F", // type and the one dark band
        graphite: "#57524A", // secondary text, 6.9:1 on paper
        rule: "rgba(21,19,15,0.14)", // hairlines
        accent: "#1F4D3A", // buttons and links; white text on it is 9.6:1
        "on-ink": "rgba(244,241,234,0.72)", // secondary text on ink
        "rule-ink": "rgba(244,241,234,0.16)", // hairlines on ink
        frame: "#E5E0D5", // behind media on paper, before it loads
        "frame-ink": "#2A2823", // behind media on ink, before it loads
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        wrap: "1320px",
        measure: "640px",
      },
    },
  },
  plugins: [],
};
