import progress from 'rollup-plugin-progress'
import postcss from 'rollup-plugin-postcss'
import nested from 'postcss-nested'
import cssnext from 'postcss-cssnext'
import simplevars from 'postcss-simple-vars'
import cssnano from 'cssnano'
import buble from 'rollup-plugin-buble'
// import { terser } from 'rollup-plugin-terser'
import html from 'rollup-plugin-html'
import autoprefixer from 'autoprefixer'
// import clean from 'postcss-clean'
// import atImport from 'postcss-import'
import nodeResolve from 'rollup-plugin-node-resolve'
import replace from 'rollup-plugin-replace'
import license from 'rollup-plugin-license'
import commonjs from 'rollup-plugin-commonjs'
import json from 'rollup-plugin-json'
import builtins from 'rollup-plugin-node-builtins'
import globals from 'rollup-plugin-node-globals'
const pkg = require('./package.json')

/**
 * Created by peak on 2017/1/6.
 */
export default {
    input: 'src/index.js',
    output: {
        file: 'dist/simple-json-editor.js',
        format: 'umd',
        name: 'SimpleJsonEditor'
    },
    plugins: [
        globals(),
        builtins(),
        license({
            banner: `simple-json-editor ${pkg.version}\n${pkg.repository.url}\nbuild at ${new Date()}`
        }),
        progress({
            clearLine: false
        }),
        replace({
            VERSION: JSON.stringify(pkg.version)
        }),
        postcss({
            extensions: ['.css'],
            plugins: [
                autoprefixer(),
                simplevars(),
                nested(),
                cssnext({ warnForDuplicates: false }),
                cssnano()
            ]
        }),
        html({
            include: '**/*.html',
            htmlMinifierOptions: {
                collapseWhitespace: true,
                collapseBooleanAttributes: true,
                conservativeCollapse: true
            }
        }),
        nodeResolve({jsnext: true, main: true}),
        commonjs({
            include: 'node_modules/**'  // Default: undefined
        }),
        json({
            include: 'node_modules/**',
            preferConst: true // Default: false
        }),
        buble({
            include: '**/*.js'
        }),
        // terser({
        //     output: {
        //         // ascii_only: true // 仅输出ascii字符
        //     },
        //     compress: {
        //         // pure_funcs: ['console.log'] // 去掉console.log函数
        //     }
        // })
    ]
}
