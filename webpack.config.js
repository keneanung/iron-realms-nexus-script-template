const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: './webpack/webpack.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    library : {
      type: "var",
      name: "Greeter"
    }
  },
  plugins: [new ESLintPlugin({
    extensions: [ '.tsx', '.ts', '.js', '.jsx' ]
  })],
};