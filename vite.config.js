import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [react()],
  base: "./", // Set the base path for the project
  server: {
    port: 5174, // Set the port number
    // open: true, // Open the browser automatically
    // cors: true, // Allow CORS
  },
})
