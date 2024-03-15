/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'sm': '640px',  // Añade tu breakpoint personalizado
        'md': '768px',  // Añade tu breakpoint personalizado
        'lg': '1024px', // Añade tu breakpoint personalizado
        'xl': '1280px', // Añade tu breakpoint personalizado
        dark: { raw : '(prefers-color-scheme: dark)' },
        light: { raw : '(prefers-color-scheme: light)' },
      },
      colors: {
        corp: '#0090ff',
      },
    },
  },
  plugins: [],
};
