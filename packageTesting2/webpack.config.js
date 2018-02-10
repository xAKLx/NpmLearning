var outputFile = 'es6ImportTest.js';

var config = {
  entry: __dirname + '/es6ImportTest.es6',
  output: {
    path: __dirname + '/',
    filename: outputFile,
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
    extensions: ['.es6', '.js']
  }
};

module.exports = config;