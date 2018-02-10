var outputFile = 'es6ImportTest.js';

var config = {
  entry: {
    es6ImportTest: __dirname + '/es6ImportTest.es6',
    typescriptTest: __dirname + '/typescriptTest.ts'
  },
  output: {
    filename: '[name].js',
  },
  module: {
    loaders: [
      {
        test: /(\.es6|\.es6x)$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /(\.ts|\.tsx)$/,
        loader: 'ts-loader',
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  resolve: {
    extensions: ['.es6', '.js', '.ts']
  }
};

module.exports = config;