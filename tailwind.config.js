/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,tsx,ts}"],
  theme: {
    extend: {
      boxShadow: {
        "custom-shadow": "0px 8px 20px 0px rgba(255,160,28,0.05)",
        "custom-bottom-bar-shadow": "0px -8 8px 0px rgba(255,160,28,0.05)"
        // 你还可以添加其他阴影效果...
      },
      backgroundImage: (theme) => ({
        "gradient-radial":
          "radial-gradient(ellipse at center, #FFA01C 0%, rgba(255,255,255,0) 100%)",
        "gradient-linear":
          "linear-gradient(270deg, #FFA01C 0%, rgba(255,255,255,0) 100%)",
      }),
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
