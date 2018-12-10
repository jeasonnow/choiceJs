const commonjs = require('rollup-plugin-commonjs');
const typescript = require('rollup-plugin-typescript');
const uglify = require('rollup-plugin-uglify');

const env = process.env.env || 'production';
const deploy = process.env.deploy || 'false';

let defaultPlugins = [
  typescript({ target: 'es5', module: 'CommonJS' }),
  commonjs({ extensions: ['.js', '.ts'] })
];

if (deploy === 'true' && env === 'production') {
  defaultPlugins.push(uglify());
}

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/index.js',
    format: 'cjs'
  },
  plugins: defaultPlugins
};
