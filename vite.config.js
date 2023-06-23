import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(() => {
  return {
    server: {
      open: true,
      overlay: false,
    },
    build: {
      outDir: "dist",
    },
    plugins: [react()],
  };
});
