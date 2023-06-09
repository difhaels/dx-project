/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1530px",
      // => @media (min-width: 1570px) { ... }
      "3xl": "1630px",
      // => @media (min-width: 1570px) { ... }
    },
    extend: {
      colors: {
        bg: "#ABC4AA",
        text: "#5C8984",
        primary: "#E3F4F4",
      },
    },
  },
  plugins: [],
};
