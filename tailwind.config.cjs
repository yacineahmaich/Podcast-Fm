/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        dark: "#0c1824",
        "dark-transparent": "#0c1824d9",
        gold: "#fbc75d",
        "gold-strong": "#e29a06",
        "gold-900": "#754f03",
        "gold-500": "#d59208",
        "gold-100": "#cda552",
        gray: "#94a3b8",
        light: "#f0f2f5",
        "light-blue": "#d3dde6",
      },
    },
  },
  plugins: [],
};
