const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: [/node_modules/], use: [{ loader: 'babel-loader', options: { presets: ['es2015'] } }] },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.(ttf|eot|svg|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true
  },
  plugins: [
    new HTMLWebpackPlugin({ title: 'Amandas Website'})
  ]
}
