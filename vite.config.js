import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration for the Vastu Interior Studio project.
// Includes the React plugin and sets the base path for deployment if
// necessary. When deploying to platforms like Vercel or Netlify this file
// ensures JSX is compiled and the app runs efficiently.

export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
  },
});