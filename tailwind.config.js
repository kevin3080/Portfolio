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
      keyframes: {
        "fly-in": {
                    "0%": {
                        opacity: "0",
                        transform: "scale3d(0.3, 0.3, 0.3)",
                        transitionTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
                    },
                    "20%": {
                        transform: "scale3d(1.1, 1.1, 1.1)"
                    },
                    "40%": {
                        transform: "scale3d(0.9, 0.9, 0.9)"
                    },
                    "60%": {
                        opacity: "1",
                        transform: "scale3d(1.03, 1.03, 1.03)"
                    },
                    "80%": {
                        transform: "scale3d(0.97, 0.97, 0.97)"
                    },
                    "100%": {
                        opacity: "1",
                        transform: "scale3d(1, 1, 1)"
                    },
                },
      },
      animation: {
        flyIn: 'fly-in 0.6s ease-in-out 0.25s 1',
      },
      colors: {
        corp: '#0090ff',
        themeLight: '#071739',
      },
    },
  },
  plugins: [],
};
