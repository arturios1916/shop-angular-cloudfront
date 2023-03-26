const slsw = require('serverless-webpack');

module.exports = {
  entry: slsw.lib.entries,
  resolve: {
    extensions: ['.js', '.json', '.ts',]
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: [
          '/node_modules/',
          '/src/'
        ]
      }
    ]
  },
}
