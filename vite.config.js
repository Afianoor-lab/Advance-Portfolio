import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { cpSync, existsSync } from "node:fs";

export default defineConfig({
  plugins: [
    react(),
    {
      name: "copy-portfolio-assets",
      closeBundle() {
        if (existsSync("assets")) {
          cpSync("assets", "dist/assets", { recursive: true });
        }
      },
    },
  ],
  server: {
    proxy: {
      "/api": "http://localhost:3000",
    },
  },
});
