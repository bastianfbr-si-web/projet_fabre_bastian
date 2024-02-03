import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/**/*.{html,ts}',
  ],
  daisyui: {
    themes: ["light"],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
} satisfies Config

