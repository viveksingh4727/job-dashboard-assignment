/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        generalSans: ['General Sans', 'sans-serif'],
      },
      colors: {
        primary: 'var(--Colors-Border-border-primary, rgba(208, 213, 221, 1))',
        // Define other custom colors as needed
      },
      
    },
    
  },
  plugins: [],
}
