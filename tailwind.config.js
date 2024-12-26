/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        colorChange: {
          "0%": { backgroundColor: "#facc15" },
          "25%": { backgroundColor: "#FFF44F" },
          "50%": { backgroundColor: "#FFAA1D" },
          "75%": { backgroundColor: "#FFA700" },
          "100%": { backgroundColor: "#EED202" },        
        },
        textChange: {
          "0%": { color: "#facc15" },
          "25%": { color: "#FFF44F" },
          "50%": { color: "#FFAA1D" },
          "75%": { color: "#FFA700" },
          "100%": { color: "#EED202" },        
        },
      },
      animation: {
        colorChange: "colorChange 5s infinite",
        textChange:"textChange 5s infinite"
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
};
