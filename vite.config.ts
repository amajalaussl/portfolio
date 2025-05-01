import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  base: '/portfolio/',
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'resume.pdf') {
            return 'resume.pdf';
          }
          return 'assets/[name]-[hash][extname]';
        }
      }
    }
  }
});
