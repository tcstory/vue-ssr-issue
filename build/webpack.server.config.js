const { merge } = require("webpack-merge");
const nodeExternals = require("webpack-node-externals");
const getBaseConfig = require("./webpack.base.config.js");
const VueSSRServerPlugin = require("vue-server-renderer/server-plugin");
const path = require("path");

module.exports = function() {
  return merge(getBaseConfig(true), {
    entry: {
      app: [path.join(__dirname, `../src/entry-server.js`)]
    },
    target: "node",
    output: {
      path: path.resolve(__dirname, "../dist-server"),
      libraryTarget: "commonjs2"
    },

    externals: [
      nodeExternals({
        allowlist: [
          /\.css$/,
        ]
      })
    ],

    plugins: [
      new VueSSRServerPlugin(),
    ]
  });
};
