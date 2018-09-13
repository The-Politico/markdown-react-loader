const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => ({
  context: path.resolve(__dirname),
  mode: 'development',
  entry: `./index.js`,
  output: {
    path: path.resolve(__dirname),
    filename: 'bundle.js',
  },
  devServer: {
    port: 3000,
    open: true,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/preset-env', {
              'targets': {
                'browsers': 'last 2 versions',
              },
            }],
            '@babel/preset-react',
          ],
        },
      },
    }, {
      test: /\.md$/,
      use: {
        loader: path.resolve(__dirname, '../index.js'),
      },
    }, {
      test: /\.s?css$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: 'Loader test',
    }),
  ],
});
