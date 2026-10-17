import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dima: {
          slate: {
            DEFAULT: "#0F172A",
            900: "#0F172A",
            800: "#1E293B",
            700: "#334155",
            600: "#475569",
          },
          teal: {
            DEFAULT: "#0E7490",
            dark: "#155E75",
            deep: "#164E63",
            light: "#06B6D4",
            soft: "#E0F2FE",
            accent: "#0891B2",
          },
          gold: {
            DEFAULT: "#D4AF37",
            light: "#FDE047",
            warm: "#CA8A04",
            dark: "#A16207",
            hover: "#B45309",
            shimmer: "#FEF08A",
          },
          emerald: {
            DEFAULT: "#059669",
            hover: "#047857",
            soft: "#D1FAE5",
          },
          pearl: {
            DEFAULT: "#F8FAFC",
            50: "#FAFAFA",
            100: "#F1F5F9",
            200: "#E2E8F0",
          }
        },
      },
      fontFamily: {
        cairo: ["var(--font-cairo)", "sans-serif"],
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(15, 23, 42, 0.08), 0 0 20px -5px rgba(212, 175, 55, 0.15)',
        'luxury-hover': '0 25px 50px -12px rgba(14, 116, 144, 0.25), 0 0 30px rgba(212, 175, 55, 0.2)',
        'gold-glow': '0 0 25px -3px rgba(212, 175, 55, 0.4)',
        'teal-glow': '0 0 25px -3px rgba(14, 116, 144, 0.35)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #D4AF37 0%, #F59E0B 50%, #B45309 100%)',
        'teal-gradient': 'linear-gradient(135deg, #0E7490 0%, #0891B2 50%, #155E75 100%)',
        'dark-luxury': 'linear-gradient(180deg, #0F172A 0%, #1E293B 100%)',
      }
    },
  },
  plugins: [],
};
export default config;
