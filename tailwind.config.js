/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class', '[data-mode="dark"]'],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        PTSans: ["'PT Sans', 'sans-serif'"],
        BrunoSC: ["'Bruno Ace SC', 'cursive'"]
      },
      dark: {
        'bg-gray-800': 'gray-900-dark',
        'bg-indigo-500': 'indigo-700',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['dark'],
      textColor: ['dark'],
    },

    screens: {

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    
  },

  
  plugins: [],
}