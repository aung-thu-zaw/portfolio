import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath } from "url";
import { URL } from "url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "/Portfolio/",
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
