/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    
  ],
  theme: {
    extend: {
      screens:{
        'mobile': '370px',
        'xsm': '640px', // Small devices (default)
        'sm': '768px', // Medium devices (default)
        'md': '1024px', // Large devices (default)
        'lg': '1280px', // Extra large devices (default)
      },
      colors:{
        color:{
          1:"#345338",
          2:"#e3efd3",
        }
      },
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        sourceCode : ['Source Code Pro', 'monospace'],
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        slideIn: 'slideIn 1s ease-out',
      },
      
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
  
}

