const path = require('path');
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist/assets'),
    filename: 'bundle.js',
    publicPath: '/assets/', // Adjusted to be placed inside the 'output' object
  },
  watchOptions: {
    poll: true,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
      watch: true
    },
    port: 527
  },
  module: {
    rules: [{
      test: /\.js$/,  //this will recognize any js file
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }
  ]
  }
};

