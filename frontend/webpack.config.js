module.exports = {
  // 1
  entry: './src/index.js',
  // 2
  output: {
    path: __dirname + '/dist', //https://alligator.io/nodejs/how-to-use__dirname/
    publicPath: '/',
    filename: 'bundle.js'
  },
  // 3
  devServer: {
      contentBase: './dist',
      compress: true,
      port: 9999
  }
};

