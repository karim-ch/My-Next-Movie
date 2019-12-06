// import webpack from 'webpack';
// import HtmlWebpackPlugin from 'html-webpack-plugin';
// import LiveReloadPlugin from 'webpack-livereload-plugin';
// import path from 'path';
// const buildPath = path.join(__dirname, 'dist');

// export default {
//   entry: './client/index.js',
//   output: {
//     path: buildPath,
//     filename: 'bundle.js'
//   },
//   module: {
//     rules: [
//       {
//         use: 'babel-loader',
//         test: /\.js$/,
//         exclude: /node_modules/
//       },
//       {
//         use: ['style-loader', 'css-loader'],
//         test: /\.css$/
//       },
//       {
//         test: /\.(png|j?g|svg|gif)?$/,
//         use: 'file-loader'
//       }
//     ]
//   },
//   devServer: {
//     historyApiFallback: true
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: 'client/index.html'
//     }),
//     new LiveReloadPlugin()
//     // new webpack.optimize.UglifyJsPlugin({
//     //   //..
//     // })
//   ]
// };

import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import LiveReloadPlugin from 'webpack-livereload-plugin';
import path from 'path';
const buildPath = path.join(__dirname, 'dist');
export default {
  entry: './client/App.js',
  output: {
    path: buildPath,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/
      },
      {
        test: /\.(png|j?g|svg|gif)?$/,
        use: 'file-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'client/index.html'
    }),
    new LiveReloadPlugin()
  ]
};
