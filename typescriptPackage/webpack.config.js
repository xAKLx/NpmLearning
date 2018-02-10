var outputFile = 'index.js';

var config = {
  entry: __dirname + '/index.ts',
  output: {
    path: __dirname + '/',
    filename: outputFile,
    libraryTarget: 'commonjs2'
  },
  module: {
    loaders: [
      {
        test: /(\.ts|\.tsx)$/,
        loader: 'ts-loader',
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  resolve: {
    extensions: ['.ts']
  }
};

module.exports = config;