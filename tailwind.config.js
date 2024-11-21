/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        scroll: "scroll-indicator 1s ease-in-out infinite",
      },
      keyframes: {
        "scroll-indicator": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(10px)" },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          // ...
          colors: {
            background: "#FFFFFF",
            primary: "#7C4DFF",
            secondary: "#03DAC6",
            primaryText: "#121212",
            secondaryText: "#555555",
            accentColor: "#BB86FC",
            highlight: "#018786",
            error: "#B00020",
            borders: "#E0E0E0",
          },
        },
        dark: {
          // ...
          colors: {
            background: "#121212",
            primary: "#BB86FC",
            secondary: "#03DAC5",
            primaryText: "#E0E0E0",
            secondaryText: "#B0B0B0",
            accentColor: "#6200EE",
            highlight: "#03DAC5",
            error: "#CF6679",
            borders: "#2C2C2C",
          },
        },
        // ... custom themes
      },
    }),
  ],
};
