/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./app/**/**/*.{js,jsx,ts,tsx}",
    "./app/**/**/**/**/*.{js,jsx,ts,tsx}",
    "./app/**/**/**/**/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./pages/**/**/*.{js,jsx,ts,tsx}",
    "./pages/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        pattern: "url('../public/images/pattern.png')",
        pattern2: "url('../public/images/pattern2.png')",
        pattern3: "radial-gradient(#F28585, transparent)",
        overlay: "linear-gradient(to left, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 65%, rgba(255, 255, 255, 1) 100%)"
      },
    },
  },
  plugins: [],
};
