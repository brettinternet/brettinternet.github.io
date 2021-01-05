import { resolve } from 'path'
import typescript from '@rollup/plugin-typescript'
import babel from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'
import comments from 'postcss-discard-comments'
import tailwind from 'tailwindcss'
const paths = require('./paths')

const isBuild = !process.env.ROLLUP_WATCH

export default [
  {
    input: resolve(paths.scripts, 'main.ts'),
    plugins: [
      typescript(),
      babel({ babelHelpers: 'bundled' }),
      isBuild && terser(),
    ],
    output: [
      {
        dir: paths.build,
        format: 'cjs',
        sourcemap: true,
      },
    ],
  },
  {
    input: resolve(paths.styles, 'main.sass'),
    plugins: [
      postcss({
        extensions: ['.sass', '.css'],
        inject: false,
        extract: true,
        sourceMap: true,
        plugins: [
          tailwind(resolve(paths.config, 'tailwind.js')),
          isBuild && autoprefixer,
          isBuild &&
            comments({
              removeAll: true,
            }),
        ],
      }),
    ],
    output: [
      {
        dir: paths.build,
      },
    ],
  },
]
