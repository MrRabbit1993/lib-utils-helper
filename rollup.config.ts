import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
// import sourceMaps from 'rollup-plugin-sourcemaps'
import camelCase from 'lodash.camelcase'
import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'
import json from 'rollup-plugin-json'

const pkg = require('./package.json')

const libraryName = 'lib-utils-helper'

export default {
  input: 'src/index.ts',
  output: [
    { file: pkg.main, name: camelCase(libraryName), format: 'umd', sourcemap: false },
    { file: pkg.module, format: 'es', sourcemap: false },
  ],
  // Indicate here external modules you don't wanna include in your bundle (i.e.: 'lodash')
  external: [],
  watch: {
    include: 'src/**',
  },
  plugins: [
    json(), // Allow json resolution
    terser(),
    typescript({ useTsconfigDeclarationDir: true }),  // Compile TypeScript files
    // Allow bundling cjs modules (unlike webpack, rollup doesn't understand cjs)
    commonjs(),
    resolve(),
    // sourceMaps(), // Resolve source maps to the original source
    // terser()
  ],
}
