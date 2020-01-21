const webpack = require('webpack');

module.exports = {

  entry: './src/index.js',

  module: {
    rules: [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },

      {

        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      }
    ]
  },

  resolve: {
    extensions: ['*', '.js', 'jsx']
  },

  output: {
    path: __dirname + '/dist', //https://alligator.io/nodejs/how-to-use__dirname/
    publicPath: '/',
    filename: 'bundle.js'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  devServer: {
    contentBase: './dist',
    hot: true, //enables hot reload on file changes (similar to nodemon)
    compress: true,
    port: 9999 //if not specified the default port is 8080
  }
};
