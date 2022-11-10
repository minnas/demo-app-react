import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@Components": path.resolve(__dirname, "src/components"),
      "@Store": path.resolve(__dirname, "src/store"),
      "@Types": path.resolve(__dirname, "./src/types"),
      "@Api": path.resolve(__dirname, "./src/api"),
      "@Assets": path.resolve(__dirname, "./src/assets"),
    },
  },
});
