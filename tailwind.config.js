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
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          // ...
          colors: {
            background: "#FFFFFF",
            primary: "#6200EE",
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
            borders: "#333333",
          },
        },
        // ... custom themes
      },
    }),
  ],
};
