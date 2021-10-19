const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    // make sure to include the plugin!
    new VueLoaderPlugin(),
  ],
  devServer: {
    historyApiFallback: true,
    open: true,
    host: '0.0.0.0',
    port: 8080,
    static: {directory: path.join(__dirname, 'dist')},
    hot: true
   },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js',
    },
  }
};