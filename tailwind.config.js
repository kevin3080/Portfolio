/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'sm': '640px',  // Añade tu breakpoint personalizado
        'md': '768px',  // Añade tu breakpoint personalizado
        'lg': '1024px', // Añade tu breakpoint personalizado
        'xl': '1280px', // Añade tu breakpoint personalizado
      },
      colors: {
        corp: '#0090ff',
      },
    },
  },
  plugins: [],
};
