/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "rgba(255, 255, 255, 0.08)",
        input: "rgba(255, 255, 255, 0.03)",
        ring: "#d4af37",
        background: "#1a1a1a",
        foreground: "#e8e8e8",
        primary: {
          DEFAULT: "#d4af37", // Muted gold
          foreground: "#1a1a1a",
        },
        secondary: {
          DEFAULT: "#2a2a2a",
          foreground: "#e8e8e8",
        },
        accent: {
          DEFAULT: "#b8860b", // Dark goldenrod
          foreground: "#1a1a1a",
        },
        muted: {
          DEFAULT: "#2a2a2a",
          foreground: "#a0a0a0",
        },
        card: {
          DEFAULT: "#232323",
          foreground: "#e8e8e8",
        },
      },
      backgroundImage: {
        'gradient-subtle': 'linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%)',
        'gradient-gold': 'linear-gradient(135deg, #d4af37 0%, #b8860b 100%)',
      },
      backdropBlur: {
        xs: '2px',
      },
      borderRadius: {
        lg: "0.75rem",
        md: "0.5rem",
        sm: "0.375rem",
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(0, 0, 0, 0.15)',
        'medium': '0 4px 16px rgba(0, 0, 0, 0.25)',
        'gold': '0 4px 16px rgba(212, 175, 55, 0.15)',
      },
      keyframes: {
        "fade-in": {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        "slide-in": {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        "fade-in": "fade-in 0.6s ease-out",
        "slide-in": "slide-in 0.5s ease-out",
      },
    },
  },
  plugins: [],
}
