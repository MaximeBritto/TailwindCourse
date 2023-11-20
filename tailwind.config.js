/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary": "#1C85E8",
        "secondary": {
          dark: "#020202",
          grey: "#B8B8B8"
        }
      },
      fontFamily: {
        body: ["Montserrat"]
      },
      fontSize: {
        "4.5xl": "2.5rem"
      },
      spacing: {
        128: "32rem",
        144: "36rem"
      },
    margin: {
      "mediumWrapper": "8rem",
      
    },
    padding: {
      "mediumWrapper": "8rem",
      
    },

    },
    },
    
  
  plugins: [],
}

