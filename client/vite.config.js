import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import generouted from "@generouted/react-router/plugin";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), generouted()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
