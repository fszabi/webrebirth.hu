import htmlPurge from "vite-plugin-purgecss";
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [htmlPurge()],
  base: "",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        success: resolve(__dirname, "success.html"),
      },
    },
  },
});
