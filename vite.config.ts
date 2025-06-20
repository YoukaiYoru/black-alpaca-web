import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  assetsInclude: ["**/*.glb"],
  resolve: {
    alias: {
      "@": "/src",
      "@components": "/src/components",
      "@pages": "/src/pages",
      "@routes": "/src/routes",
      "@hooks": "/src/hooks",
      "@utils": "/src/utils",
      "@styles": "/src/styles",
      "@assets": "/src/assets",
      "@context": "/src/context",
      "@types": "/src/types",
    },
  },
});
