import { defineConfig } from "vite";
import path from "path";


export default defineConfig( {
  build: {
    lib: {
      fileName: 'example-component',
      entry: 'src/example.ts',
      formats: [ 'es' ]
    },
    rollupOptions: {
      // external: /^lit/
    }
  },

  /* allows the use of $/ as an alias for the src folder */
  resolve: { alias: { '$/': `${ path.resolve( __dirname, 'src' ) }/` } },

  /* prevents error messages when saving this file while in dev mode */
  server: { fs: { allow: [ '..' ] } }
} );