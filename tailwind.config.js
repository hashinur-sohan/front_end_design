/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "dk-gray": "#9FA0A1",
        "li-gray": "#E6E6E6",
        "r-blue": "#2042B6",
      },

      fontFamily: {
        nantes: ["Nantes", "sans-serif"],
        messina: ["Messina Sans", "sans-serif"],
      },
      lineHeight: {
        tight: "1.2",
        "extra-tight": "1.1",
        "super-tight": "1",
      },
    },
  },
  plugins: [],
};
