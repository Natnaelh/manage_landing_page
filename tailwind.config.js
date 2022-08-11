/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
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

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      colors: {
        brightRed: "hsl(12,88%,59%)",
        brightRedLight: "hsl(12, 88% ,69%)",
        brightRedSupLight: "hsl(12, 88% ,95%)",
        darkBlue: "hsl(228, 39% ,95%)",
        darkGrayishBlue: "hsl(227, 12% ,61%)",
        veryDarkBlue: "hsl(223, 12% ,13%)",
        veryPaleRed: "hsl(13, 100% ,96%)",
        veryLightGray: "hsl(0, 0% ,98%)",
      },
    },
  },
  plugins: [],
};
