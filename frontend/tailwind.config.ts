import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/**/*.{html,ts}',
  ],
  daisyui: {
    themes: ["light"],
  },
  theme: {
    extend: {
      colors: {
        "primary": "#D1392A",
        "secondary": "#9D6F6F",
        "tertiary": "#9D6F6F",
        "accent": "#F7F7F7",
      },
      fontFamily: {
        "inter": ["Inter", "sans-serif"],
        'merienda': ['Merienda', 'cursive'],
      },
    },
  },
  plugins: [require("daisyui")],
} satisfies Config

