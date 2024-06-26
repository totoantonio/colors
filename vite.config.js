import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteImagemin from "vite-plugin-imagemin";
import htmlMinifyPlugin from "./src/htmlMinifyPlugin.js";

export default defineConfig({
  base:
    process.env.NODE_ENV === "production"
      ? "https://totoantonio.github.io/colors/"
      : "/",
  plugins: [
    react(),
    htmlMinifyPlugin(),
    viteImagemin({
      // Plugin options here
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 20,
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            name: "removeViewBox",
          },
          {
            name: "removeEmptyAttrs",
            active: false,
          },
        ],
      },
    }),
  ],
});
