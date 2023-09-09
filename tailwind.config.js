/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'BgImage':" url('https://media.istockphoto.com/id/173597880/photo/colorful-t-shirts.jpg?s=612x612&w=0&k=20&c=YZIUwL0PjrEJ92LJ1WikWoc7MDjHKCwvkRHFz0lY1x4=')",

        },
      screen:{
        'md':'757px',
        'lg':'1121px'
      },
      colors:{
        overlay:'linear-gradient(rgba(0,0,0.5), rgba(0,0,0.5))',
        checkout:'#FAFAFA'
      },
      spacing: {
        '3/3': '100%', 
      },
    },
  },
  plugins: [],
}
