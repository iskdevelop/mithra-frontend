/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      screens: {
        // Custom breakpoints
        'xs': '0px',
        'sm': '320px',
        'md': '672px',
        'lg': '1056px',
        'xl': '1312px',
        'mx': '1584px',
        'mxx': '1784px',
      },
      spacing: {
        '2px': '2px',
        '4px': '4px',
        '8px': '8px',
        '12px': '12px',
        '16px': '16px',
        '24px': '24px',
        '32px': '32px',
        '40px': '40px',
        '48px': '48px',
        '64px': '64px',
        '80px': '80px',
        '96px': '96px',
        '160px': '160px'
      },
    },
  },
  plugins: [],
}

