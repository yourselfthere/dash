/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: { guy: "url('/images/guy.jpg')" },
  },
  plugins: [],
};
