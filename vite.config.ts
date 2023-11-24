
import { defineConfig } from "vite";
import react from '@vitejs/plugin-react-swc'
import path from "path";
export default defineConfig({
  optimizeDeps: {
    exclude: ['js-big-decimal'],
    // exclude: ['fsevents'],
  },
  plugins: [react()],
  base:"/AGT/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@imports": path.resolve(__dirname, "/src/imports.tsx"),
      "@apis": path.resolve(__dirname, "src/store/apis"),
      "@slices": path.resolve(__dirname, "src/store/slices"),
      "@imgs": path.resolve(__dirname, "src/assets/imgs"),
    },
  },
  server: {
    port: 3000,
  },
});
