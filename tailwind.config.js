/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkSlate: {
          DEFAULT: '#0F172A',
          950: '#070C18',
          900: '#0F172A',
          800: '#1E293B',
          700: '#334155',
        },
        crimson: {
          DEFAULT: '#E63946',
          400: '#F87171',
          500: '#E63946',
          600: '#DC2626',
          700: '#B91C1C',
        },
        gold: {
          DEFAULT: '#F59E0B',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
        },
        emeraldGlow: '#10B981',
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'glow-crimson': '0 0 25px -5px rgba(230, 57, 70, 0.5)',
        'glow-gold': '0 0 25px -5px rgba(245, 158, 11, 0.45)',
        'glow-emerald': '0 0 20px -3px rgba(16, 185, 129, 0.4)',
        'inner-light': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.1)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};
