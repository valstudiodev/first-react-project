import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig(({ command }) => {
  const isNetlify = process.env.NETLIFY === 'true';
  const isBuild = command === 'build';

  // Для Netlify — '/', для GitHub Pages збірки — '/first-react-project/'
  const base = isBuild && !isNetlify ? '/first-react-project/' : '/';

  return {
    base,
    plugins: [tailwindcss(), react()],
    css: {
      preprocessorOptions: {
        scss: {
          silenceDeprecations: ['import'],
        },
      },
      devSourcemap: true,
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        assets: path.resolve(__dirname, './src/assets'),
        components: path.resolve(__dirname, './src/components'),
        data: path.resolve(__dirname, './src/constants'),
        pages: path.resolve(__dirname, './src/pages'),
        router: path.resolve(__dirname, './src/router'),
        shared: path.resolve(__dirname, './src/shared'),
        styles: path.resolve(__dirname, './src/styles'),
        types: path.resolve(__dirname, './src/types'),
      },
    },
    server: {
      port: 3000,
      open: true,
    },
  };
});
