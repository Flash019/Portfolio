/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cherry: {
          50: '#FEF2F2',
          100: '#FDE6E6',
          200: '#FACACB',
          300: '#F7A2A3',
          400: '#F06D70',
          500: '#D2042D', // Primary cherry
          600: '#B8032A',
          700: '#990011', // Darker cherry
          800: '#7C0312',
          900: '#67020E',
          950: '#450009',
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      perspective: {
        DEFAULT: '1000px',
      },
      transitionTimingFunction: {
        'bounce-sm': 'cubic-bezier(0.4, 0.0, 0.2, 1)',
      },
    },
  },
  plugins: [],
};