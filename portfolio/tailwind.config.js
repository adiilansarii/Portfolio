/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        // '20s' is the speed. Lower = faster, Higher = slower.
        'infinite-scroll': 'infinite-scroll 20s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          // We use -33.33% because the React component renders 3 sets of icons.
          // This ensures the loop resets invisibly.
          to: { transform: 'translateX(-33.33%)' },
        }
      }
    },
  },
  plugins: [],
}