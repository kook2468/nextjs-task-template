module.exports = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}", // app 디렉토리용
    "./src/shared/**/*.{js,ts,jsx,tsx}", // 컴포넌트 위치 추가
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"], //제목용
        display: ["var(--font-display)", "sans-serif"], // 본문용
      },
    },
  },
  plugins: [],
};
