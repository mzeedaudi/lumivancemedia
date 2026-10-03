/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,mdx}",
    "./components/**/*.{js,jsx,mdx}",
    "./lib/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      // Paper, ink and one signal. Mirrors the custom properties in globals.css.
      colors: {
        paper: "#F2EDE4", // the page: uncoated-stock warm, not screen white
        ink: "#15130F", // type and the one dark band; warm black, never #000
        graphite: "#57524A", // secondary text, 6.6:1 on paper
        rule: "rgba(21,19,15,0.16)", // hairlines: the grid you can see
        tally: "#D93B17", // the accent: a camera's recording light
        "on-ink": "rgba(242,237,228,0.7)", // secondary text on ink
        "rule-ink": "rgba(242,237,228,0.16)", // hairlines on ink
      },
      fontFamily: {
        display: ["var(--font-display)"],
        serif: ["var(--font-serif)"],
        mono: ["var(--font-mono)"],
      },
      maxWidth: {
        wrap: "1320px",
        measure: "640px",
      },
    },
  },
  plugins: [],
};
