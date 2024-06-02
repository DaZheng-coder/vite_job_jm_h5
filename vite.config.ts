import { defineConfig } from "vite";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import react from "@vitejs/plugin-react-swc";
import path, { resolve } from "path";
import postcssPluginPx2rem from "postcss-plugin-px2rem";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), "src/assets/svg")],
      // 指定symbolId格式
      symbolId: "icon-[dir]-[name]",
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "@request": resolve(__dirname, "./src/apis/request.ts"),
      "@assets": resolve(__dirname, "./src/assets/"),
      "@components": resolve(__dirname, "./src/components/"),
      "antd-mobile": resolve(__dirname, "./node_modules/antd-mobile/2x/"),
    },
  },
  css: {
    postcss: {
      plugins: [
        tailwindcss,
        autoprefixer,
        postcssPluginPx2rem({
          remUnit: 75,
          rootValue: 32, // 换算基准，配合lib-flexible使用 750 的设计稿 如果使用 rem.js 则基准为 16
          unitPrecision: 5,
          mediaQuery: true,
          // exclude: /(node_module)/i,
          selectorBlackList: [
            "html",
            "mint-",
            "mt-",
            "mpvue-",
            "calendar",
            "iconfont",
          ], // 在rem.js全局作用下，排除指定的文件的影响
          // propBlackList: ["border"], // 过滤属性
        }),
      ],
    },
  },
});
