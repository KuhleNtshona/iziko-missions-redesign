import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { copyFileSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';

const routeCopies = () => ({
  name: 'github-pages-routes',
  closeBundle() {
    for (const route of ['about', 'team', 'get-involved']) {
      const directory = resolve('pages-dist', route);
      mkdirSync(directory, { recursive: true });
      copyFileSync(resolve('pages-dist/index.html'), resolve(directory, 'index.html'));
    }
  },
});

export default defineConfig({base:'/iziko-missions-redesign/',plugins:[react(),routeCopies()],build:{outDir:'pages-dist'}});
