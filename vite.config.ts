import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https:///DiegoHarari.github.io/pixel-bytes",
  plugins: [react()],
});
