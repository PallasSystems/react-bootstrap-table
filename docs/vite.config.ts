import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://pallassystems.github.io/react-bootstrap-table/',
  resolve: {
    alias: [
      {
        find: '@pallassystems/react-bootstrap-table',
        replacement: path.resolve(__dirname, '../src/'),
      },
    ],
    extensions: ['.js', '.ts', '.tsx', '.jsx'],
  },
});
