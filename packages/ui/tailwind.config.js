/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      muchero: ["Murecho", "sans-serif"],
      museo: ["MuseoModerno", "sans-serif"],
      body: [
        "Murecho",
        "Hiragino Sans",
        "ヒラギノ角ゴシック",
        "メイリオ",
        "Meiryo",
        "MS Ｐゴシック",
        "MS PGothic",
        "sans-serif",
        "YuGothic",
        "Yu Gothic",
      ],
    },
  },
  plugins: [],
  corePlugins: {
    preflight: true,
  },
};
