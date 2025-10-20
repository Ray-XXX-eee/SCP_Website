import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/SCP_Website/' : '/',  // ✅ only apply base when building
  server: {
    port: 5173,
    host: true
  }
}));
