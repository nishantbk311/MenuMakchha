/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "system-ui", "sans-serif"],
      },
      colors: {
        primary: {
          100: "#B0B9F1", // very light
          200: "#8C97E5",
          300: "#6875D9",
          400: "#4453CD",
          500: "#102359", // main color
          600: "#0E1F50",
          700: "#0A183C",
          800: "#081E67", // darkest variant
          900: "#050F33",
        },
        secondary: {
          100: "#AAB8F2",
          200: "#8599E6",
          300: "#6277DA",
          400: "#4055CE",
          500: "#102359", // main secondary
          600: "#0E1F50",
          700: "#0A183C",
          800: "#081E67",
          900: "#050F33",
        },
        mint: {
          100: "#CFFFE6",
          200: "#9FFFD0",
          300: "#6FFFB8",
          400: "#3AE39E", // main mint
          500: "#33D391",
          600: "#2AC887",
          700: "#21BC7C",
          800: "#19B072",
          900: "#0FA85E",
        },
        accent: {
          100: "#BFF3F0",
          200: "#9FE7E1",
          300: "#7FDACE",
          400: "#47C6B6", // main accent
          500: "#3EBDAE",
          600: "#35B2A5",
          700: "#2CA699",
          800: "#239A8F",
          900: "#198D82",
        },
      },
    },
  },
  plugins: [],
};
