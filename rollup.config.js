import esbuild from 'rollup-plugin-esbuild'
import vue from 'rollup-plugin-vue'
import { terser } from 'rollup-plugin-terser'
import scss from 'rollup-plugin-scss'
import dartSass from 'node-sass'

export default {
  input: 'src/lib/index.ts',
  output: [
    {
      globals: {
        vue: 'Vue'
      },
      name: 'hut-ui',
      file: 'dist/lib/gulu.js',
      format: 'umd',
      plugins: [terser()]
    },
    {
      name: 'hut-ui',
      file: 'dist/lib/gulu.esm.js',
      format: 'es',
      plugins: [terser()]
    }
  ],
  plugins: [
    scss({ include: /\.scss$/, sass: dartSass }),
    esbuild({
      include: /\.[jt]s$/,
      minify: process.env.NODE_ENV === 'production',
      target: 'es2015',
      loader: 'tsx'
    }),
    vue({
      include: /\.vue$/
    })
  ]
}
