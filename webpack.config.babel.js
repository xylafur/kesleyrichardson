const path = require('path')

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: [/node_modules/], use: [{ loader: 'babel-loader', options: { presets: ['es2015'] } }] },
      { test: /\.css$/,exclude: [/node_modules/], use: ['style-loader', 'css-loader'] },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
    ]
  }
}
