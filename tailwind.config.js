/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite",
        "spin-slower": "spin 1.9s linear infinite",
        wiggle: "wiggle 2s ease-in-out infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "scale(101%)" },
          "50%": { transform: "scale(80%)" },
        },
      },
      fontFamily: {
        cursive: ["Dancing Script", "cursive"],
        Copperplate: ["Copperplate Gothic Std", "sans-serif"],
      },
    },
  },
  plugins: [],
};
