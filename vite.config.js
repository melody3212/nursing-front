// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,       // 0.0.0.0 바인딩
    port: 5173,
    proxy: { '/api': { /* 기존 프록시 설정 */ } }
  }
});
