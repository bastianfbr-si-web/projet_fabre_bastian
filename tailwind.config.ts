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
      },
    },
  },
  plugins: [require("daisyui")],
} satisfies Config

