import fs from "fs"
import path from "path"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [react()],
  base: "./", // Устанавливаем базовый путь как относительный
  server: {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Cross-Origin-Embedder-Policy": "require-corp",
      "Cross-Origin-Opener-Policy": "same-origin",
    },
    https: {
      key: fs.readFileSync(path.resolve(__dirname, "./localhost-key.pem")),
      cert: fs.readFileSync(path.resolve(__dirname, "./localhost.pem")),
    },
  },
})
