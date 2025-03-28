import { defineConfig } from "vite";

export default defineConfig({
  optimizeDeps: {
    exclude: ["ionicons"], // Ensures Web Components load correctly
  },
});
