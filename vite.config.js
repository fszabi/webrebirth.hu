import htmlPurge from "vite-plugin-purgecss";
import path from "path";

export default {
  plugins: [htmlPurge()],
  base: "",
  root: path.resolve(__dirname, "src"),
  build: {
    outDir: path.resolve(__dirname, "dist"),
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, "index.html"),
        sent: path.resolve(__dirname, "sent.html"),
      },
    },
  },
};
