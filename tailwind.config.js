/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("daisyui"), require("tailwindcss-flip")],
  themes: ["light"],
  daisyui: {},
  theme: {
    extend: {
      spacing: {
        xs: "0.5rem",
        sm: "0.75rem",
        base: "1rem",
        md: "1.25rem",
        lg: "1.5rem",
        xl: "1.75rem",
        "2xl": "2rem",
        "3xl": "2.25rem",
        "4xl": "2.5rem",
        "5xl": "2.75rem",
        "6xl": "3rem",
        "header-height": "80px",
        "sidebar-width": "90px",
        "subsidebar-width": "250px",
        "layout-margin": "106px",
        "row-height": "50px",
      },

      minHeight: {
        "min-height": "calc(100vh - (80px + 80px + 3rem + 2px))",
      },
    },
  },
};
