/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./src/components/**/*.astro",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#0c1824",
        "dark-800": "#0f2031",
        "dark-700": "#14273a",
        "dark-transparent": "#0c1824d9",
        gold: "#fbc75d",
        "gold-strong": "#e29a06",
        "gold-900": "#754f03",
        "gold-600": "#fab426",
        "gold-500": "#d59208",
        "gold-300": "#cda552",
        "gold-100": "#cca451",
        gray: "#94a3b8",
        light: "#f0f2f5",
        "light-blue": "#d3dde6",
      },
      keyframes: {
        drop: {
          "0%": { transform: "translateY(40px)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        drop: "drop .3s ease backwords",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
