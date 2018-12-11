const commonjs = require('rollup-plugin-commonjs');
const typescript = require('rollup-plugin-typescript');
const { uglify } = require('rollup-plugin-uglify');

const env = process.env.env || 'production';
const deploy = process.env.deploy || 'true';

let outputPath = 'dist/index.js';

let defaultPlugins = [
  typescript({ target: 'es5', module: 'CommonJS' }),
  commonjs({ extensions: ['.js', '.ts'] })
];

if (deploy === 'true' && env === 'production') {
  defaultPlugins.push(uglify());
  outputPath = 'deploy/index.js';
}

export default {
  input: 'src/index.ts',
  output: {
    file: outputPath,
    format: 'cjs'
  },
  plugins: defaultPlugins
};
