const webpack = require('webpack');
const path = require('path');

module.exports = {

  entry: './src/index.js',

  module: {
    rules: [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },

      {
        // test: /\.css$/i,
        // use: ['style-loader', 'css-loader'],
        test: /\.(scss)$/,
        use: [{
            // Adds CSS to the DOM by injecting a `<style>` tag
            loader: 'style-loader'
          },
          {
            // Interprets `@import` and `url()` like `import/require()` and will resolve them
            loader: 'css-loader'
          },
          {
            // Loader for webpack to process CSS with PostCSS
            loader: 'postcss-loader',
            options: {
              plugins: function() {
                return [
                  require('autoprefixer')
                ];
              }
            }
          },
          {
            // Loads a SASS/SCSS file and compiles it to CSS
            loader: 'sass-loader'
          }
        ]

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
