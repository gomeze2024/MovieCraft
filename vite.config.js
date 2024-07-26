import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.OPENAI_KEY': JSON.stringify(env.OPENAI_KEY),
      'process.env.OMDB_KEY': JSON.stringify(env.OMDB_KEY)
    },
    plugins: [react()],
  }
})