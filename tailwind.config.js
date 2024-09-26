/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],  // DM Sans font added
      },
      colors: {
        purple: {
          100: 'hsl(254, 88%, 90%)',  // Custom purple color
        },
        yellow: {
          500: 'hsl(39, 100%, 71%)',  // Custom yellow color
        },
      },
    },
  },
  plugins: [
    
  ],
};
