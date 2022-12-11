import vue from 'rollup-plugin-vue'
import css from 'rollup-plugin-css-only'
import typescript from 'rollup-plugin-typescript'
import scss from 'rollup-plugin-scss'
import dartSass from 'sass'

export default {
  input: 'src/lib/index.ts',
  output: {
    format: 'esm',
    file: 'dist/MyComponent.js'
  },
  external: ['vue', 'dayjs'],

  plugins: [
    typescript({
      tsconfig: false,
      experimentalDecorators: true,
      module: 'es2015'
    }),
    scss({ include: /\.scss$/, sass: dartSass }),
    css(),
    vue({ css: false })
  ]
}
