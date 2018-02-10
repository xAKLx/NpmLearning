var outputFile = 'index.js';

var config = {
  entry: __dirname + '/index.es6',
  output: {
    path: __dirname + '/',
    filename: outputFile,
    libraryTarget: 'commonjs2'
  },
  module: {
    loaders: [
      {
        test: /(\.es6|\.es6x)$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  resolve: {
    extensions: ['.es6']
  }
};

module.exports = config;