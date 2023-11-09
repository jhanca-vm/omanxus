/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,svelte}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans Variable', 'sans-serif']
      }
    }
  },
  daisyui: {
    themes: [
      {
        custom: {
          primary: '#7d3431',
          secondary: '#b16a60',
          accent: '#f8e5da',
          neutral: '#0d0d0d',
          'base-100': '#ffffff'
        }
      }
    ]
  },
  plugins: [require('daisyui')]
}
