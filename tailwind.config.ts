import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6C63FF',
          50: '#F0EEFF',
          100: '#E0DDFF',
          200: '#C7C3FF',
          300: '#A8A3FF',
          400: '#8B85FF',
          500: '#6C63FF',
          600: '#5A52E6',
          700: '#4740B8',
          800: '#352F8A',
          900: '#221E5C',
        },
        surface: {
          light: '#F9FAFB',
          dark: '#0F172A',
          card: '#FFFFFF',
          cardDark: '#1E293B',
        },
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        arabic: ['Cairo', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config