/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'midnight': '#0A0A1B',
        'deep-blue': '#1A1A2F',
        'violet-glow': '#8B5CF6',
        'violet-accent': '#6D28D9',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: 'white',
            strong: {
              color: 'white',
            },
            h1: {
              color: 'white',
            },
            h2: {
              color: 'white',
            },
            h3: {
              color: 'white',
            },
            a: {
              color: '#8B5CF6',
              '&:hover': {
                color: '#6D28D9',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}