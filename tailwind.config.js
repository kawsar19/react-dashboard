/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          900: "#0e612b",
          800: "#41945e",
          300: "rgba(238,255,239,255)",
          200: "#f2fff6",
        },
      },
    },
  },
  plugins: [
    require("flowbite/plugin")({
      charts: true,
    }),
  ],
};
