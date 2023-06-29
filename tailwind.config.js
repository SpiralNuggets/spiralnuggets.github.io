/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["emerald", "dracula", "lofi", "black"],
  },
  theme: {
    extend: {},
  },
}

module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: ["emerald", "dracula", "lofi", "black"],
  },
}