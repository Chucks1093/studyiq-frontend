/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg": "/images/hero-img.jpg",
        "quiz-bg": "/images/quiz-bg.jpg"
      },
      gridTemplateColumns: {
        "dashboard-md": "23% 77%",
        "dashboard-sm": "100%",
        "options-sm": "auto 4rem"
      },
      gridTemplateRows: {
        "dashboard-md": "10dvh 90dvh"
      }
    },
  },
  plugins: [],
}

