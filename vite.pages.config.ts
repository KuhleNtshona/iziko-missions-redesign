import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({base:'/iziko-missions-redesign/',plugins:[react()],build:{outDir:'pages-dist'}});
