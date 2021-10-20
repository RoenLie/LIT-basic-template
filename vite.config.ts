import { defineConfig } from "vite";
import fs from "fs";
import path from "path";
import glob from 'fast-glob';


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


/* -------------------------------------------------------------------------------------------------- */
/* code intended for multi export of components */
// const imports = [];
// const getImports = async () => {
//    const files = await glob( [ path.resolve( '../../components/**/package.json' ), '!**/node_modules/**/*' ] );
//    files.forEach( file => {
//       const content = fs.readFileSync( file, 'utf-8' );
//       const pkg = JSON.parse( content );
//       if ( pkg.imports ) {
//          imports.push( {
//             name: pkg.name,
//             lib: path.resolve( file, '../', pkg.imports.lib ),
//             style: path.resolve( file, '../', pkg.imports.style )
//          } );
//       }
//    } );
// };