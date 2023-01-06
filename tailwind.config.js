/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "src/pages/**/*.{js,ts,jsx,tsx}",
    "src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        buytoken: "url('public/assets/buytoken.svg')",
        lottery: "url('public/assets/lottery.svg')",
        sendEther: "url('public/assets/sendEther.svg')",
        eth: "url('public/assets/eth.svg')",
        tri: "url('public/assets/tri.svg')",
      },
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
      colors: {
        // Theme Colors
        mainBg: "#1A1A1A",
        btnBorder: "#963DFF",
        btnHover: "#712dbe",
        btnText: "#bbc4cf",

        // Card specific colors
        slateBg: "#202231",
        textBg: "#bfbfbf",
        borderBg: "#3a4361",
      },
      fontFamily: {
        raj: ["Rajdhani", "sans-serif"],
        rubik: ["Rubik"],
      },
      screens: {
        mf: "990px",
      },
      keyframes: {
        "logo-in": {
          "0%": {
            "-webkit-transform": "translateX(-30%)",
            transform: "translateX(-30%)",
          },
          "100%": {
            "-webkit-transform": "translateX(0%)",
            transform: "translateX(0%)",
          },
        },
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
        wiggle: {
          "0%, 100%": {
            transform: "rotate(-3deg)",
          },
          "50%": {
            transform: "rotate(3deg)",
          },
        },
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-out-down": {
          from: {
            opacity: "1",
            transform: "translateY(0px)",
          },
          to: {
            opacity: "0",
            transform: "translateY(10px)",
          },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-out-up": {
          from: {
            opacity: "1",
            transform: "translateY(0px)",
          },
          to: {
            opacity: "0",
            transform: "translateY(10px)",
          },
        },
      },
      animation: {
        "logo-in": "logo-in 0.5s ease-out",
        blob: "blob 7s infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
        "fade-in-down": "fade-in-down 0.5s ease-out",
        "fade-out-down": "fade-out-down 0.5s ease-out",
        "fade-in-up": "fade-in-up 0.5s ease-out",
        "fade-out-up": "fade-out-up 0.5s ease-out",
      },
    },
  },
  plugins: [],
}
