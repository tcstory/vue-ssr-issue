/* eslint-disable */
const path = require("path");

const { merge } = require("webpack-merge");
const VueSSRClientPlugin = require("./plugins/ssr-client-plugin/");
const getBaseConfig = require("./webpack.base.config.js");

module.exports = function() {
  const baseConfig = getBaseConfig();

  const plugins = [
    new VueSSRClientPlugin(),
  ]

  return merge(baseConfig, {
    entry: {
      app: [path.join(__dirname, "../src/entry-client.js")]
    },
    output: {
      path: path.resolve(__dirname, "../dist-client"),
      publicPath: '/static/',
      filename: "js/[name].js",
      chunkFilename: "js/[name].js"
    },
    optimization: {
      minimize: false,
      splitChunks: {
        minSize: 10,
        cacheGroups: {
          vendors: {
            name: "chunk-vendors",
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            chunks: "initial"
          },
        }
      },
    },
    plugins,
  });
};
