const commonjs = require("rollup-plugin-commonjs");
const typescript = require("rollup-plugin-typescript");

export default {
  input: "src/index.ts",
  output: {
    file: "dist/bundle.js",
    format: "cjs"
  },
  plugins: [
    typescript({ target: "es5", module: "CommonJS" }),
    commonjs({ extensions: [".js", ".ts"] })
  ]
};
