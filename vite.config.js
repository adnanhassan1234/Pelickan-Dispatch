import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  return defineConfig({
    clearScreen: false,
    plugins: [react()],
    resolve: {
      alias: {
        "@": "/src",
      },
    },
    server: {
      host: "0.0.0.0",
      strictPort: true,

      hmr: {
        clientPort: parseInt(process.env.VITE_CLIENT_PORT),
      },
    },
  });
};
