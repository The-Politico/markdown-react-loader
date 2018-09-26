const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const portfinder = require('portfinder');

portfinder.basePort = 3000;

const config = (env, argv, port) => ({
  context: path.resolve(__dirname),
  mode: 'development',
  entry: `./index.js`,
  output: {
    path: path.resolve(__dirname),
    filename: 'bundle.js',
  },
  devServer: {
    port,
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

module.exports = (env, argv) =>
  portfinder.getPortPromise()
    .then(port => config(env, argv, port));
