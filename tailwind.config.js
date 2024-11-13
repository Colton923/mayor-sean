/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      blue: "#0F1647",
      brown: "#B79148",
      green: "#008B39",
      yellow: "F6D800",
      red: "#BE0A2F",
      "light-blue": "#93C9F5",
      white: "#fff",
    },
    extend: {
      keyframes: {
        "blur-in": {
          "0%": { filter: "blur(6px)" },
          "100%": { filter: "blur(0px)" },
        },
      },
      animation: {
        "blur-in": "blur-in 1200ms ease-in forwards",
      },
    },
  },
  plugins: [],
};
