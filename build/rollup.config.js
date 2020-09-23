import path from 'path'
import baseConfig from './rollup.config.base'

const resolveFile = (filePath) => {
  return path.join(__dirname, '..', filePath)
};

module.exports = [{
  input: 'src/main.js',
  output: [
    {
      // 打包后的全局变量，如浏览器端 window.ReactRedux　
      name:"JSON2GQL", 
      file: resolveFile("./dist/json2gql.js"),
      format: 'umd',
      // exports: 'auto'
    }
  ],
  ...baseConfig({
    commonjs: {
      include: 'dist/**'
    }
  })
}]

// https://github.com/rollup/rollup-plugin-commonjs#custom-named-exports
// 当引入commonjs包时，如果该包对exports进行了重新赋值，那么通过rollup打包时，获取不到该值，只能通过namedExports来告知rollup
// 所以我们打包时，尽量只打包cjs模式，如果需要其他模式，单独打，尽量不要umd模式


// 使用es6语法时，不要export const a = '' 和export default一起使用，这样打包出来的文件不会有module.default
// 只有exports.default，业务无法直接通过 import test from 'lib'