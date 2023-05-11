import htmlPurge from "vite-plugin-purgecss";
import { resolve } from "path";

export default {
  plugins: [htmlPurge()],
  base: "",
  build: {
    outDir: "../backend/invest_apps/templates",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        contact: resolve(__dirname, "contact/sent.html"),
      },
    },
  },
};
