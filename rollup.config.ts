import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript'
import { terser } from 'rollup-plugin-terser';
import json from '@rollup/plugin-json';


// const libraryName = 'lib-utils-helper'

export default {
  input: 'src/index.ts',
  output: [
    { file: "dist/lib-utils-helper.umd.js", name: "libUtilsHelper", format: 'umd', sourcemap: false },
    { file: "dist/lib-utils-helper.es5.js", format: 'es', sourcemap: false },
  ],
  // Indicate here external modules you don't wanna include in your bundle (i.e.: 'lodash')
  external: [],
  watch: {
    include: 'src/**',
  },
  plugins: [
    nodeResolve({ browser: true }),
    json(), // Allow json resolution
    commonjs(),
    typescript(),  // Compile TypeScript files
    // Allow bundling cjs modules (unlike webpack, rollup doesn't understand cjs)
    terser({ module: true, output: { comments: 'some' } }),
  ],
}
