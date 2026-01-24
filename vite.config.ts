import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [
        react({
          // Enable Fast Refresh
          fastRefresh: true,
        })
      ],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        // Optimize chunk splitting
        rollupOptions: {
          output: {
            manualChunks: {
              vendor: ['react', 'react-dom'],
              ui: ['framer-motion', 'lucide-react'],
              charts: ['recharts'],
            }
          }
        },
        // Enable source maps for debugging
        sourcemap: false,
        // Optimize CSS
        cssCodeSplit: true,
        // Reduce bundle size
        minify: 'esbuild'
      },
      // Optimize dependencies
      optimizeDeps: {
        include: ['react', 'react-dom', 'framer-motion', 'lucide-react', 'recharts']
      }
    };
});
