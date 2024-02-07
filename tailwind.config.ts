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
      },
    },
  },
  plugins: [require("daisyui")],
} satisfies Config

