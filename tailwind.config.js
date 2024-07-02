/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          marine: 'hsl(213, 96%, 18%)',
          purpleBlue: 'hsl(243, 100%, 62%)',
          pastelBlue: 'hsl(228, 100%, 84%)',
          blue: 'hsl(206, 94%, 87%)',
          red: 'hsl(354, 84%, 57%)'
        },
        neutrals: {
          coolGray: 'hsl(231, 11%, 63%)',
          lightGray: 'hsl(229, 24%, 87%)',
          magnolia: 'hsl(217, 100%, 97%)',
          alabaster: 'hsl(231, 100%, 99%)'
        }
      },
      fontFamily: {
        body: ['Ubuntu']
      },
      backgroundImage: {
        desktop: 'url("/multi-step-form/bg-sidebar-desktop.svg")',
        mobile: 'url("/multi-step-form/bg-sidebar-mobile.svg")'
      }
    },
  },
  plugins: [],
}