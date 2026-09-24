/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          light: '#F7F7F5',
          dark: '#0D0D0D',
        },
        surface: {
          light: '#FFFFFF',
          dark: '#141414',
          elevatedLight: '#EFEFEB',
          elevatedDark: '#1E1E1E',
        },
        ink: {
          primary: '#111111',
          primaryDark: '#F3F3EF',
          secondary: '#6B6B67',
          secondaryDark: '#92928D',
          muted: '#8E8E89',
          mutedDark: '#666663',
        },
        borderLine: {
          light: '#DCDCD7',
          dark: '#292929',
          subtleLight: '#E8E8E3',
          subtleDark: '#1F1F1F',
        },
        accent: {
          DEFAULT: '#0284C7',
          dark: '#38BDF8',
          hover: '#0369A1',
          glow: 'rgba(2, 132, 199, 0.12)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Geist', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.035em',
        tighter: '-0.02em',
        tight: '-0.01em',
        normal: '0',
        wide: '0.025em',
        wider: '0.05em',
        widest: '0.1em',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}
