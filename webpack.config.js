module.exports = {
  devtool: 'eval-source-map',
  entry: {
    host: ["babel-polyfill", "./host/index.js"],
    participant: ["babel-polyfill", "./participant/index.js"],
  },
  output: {
    path: "./",
    filename: "[name].js"
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: "babel"
    }]
  },
  resolve: {
    extensions: [
      "", ".js"
    ],
    modulesDirectories: [
      "node_modules", "./"
    ]
  },
  plugins: [
    function () {
      this.plugin('watch-run', (watching, callback) => {
        console.log('\033[36m' + '\033[36m' + 'Begin compile at ' + new Date() + ' \033[39m')
        callback()
      })
    }
  ]
};
