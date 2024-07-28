import { viteCommonjs } from '@originjs/vite-plugin-commonjs'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [viteCommonjs()],
  base: '/'
})
