const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = function (ssr) {
  return {
    mode: 'production',
    output: {
      publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          use: [
            {
              loader: "vue-loader",
            }
          ]
        },
        {
          test: /\.s?css$/,
          use: ssr ? [
            {
              loader: "null-loader",
            },
          ] : [
            {
              loader: MiniCssExtractPlugin.loader
            },
            {
              loader: "css-loader",
            },
            {
              loader: "sass-loader",
            }
          ]
        },
      ]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new VueLoaderPlugin(),
      new MiniCssExtractPlugin({
        filename: "css/[name].[contenthash].css",
        chunkFilename: "css/[name].[id].[contenthash].css",
        ignoreOrder: true
      })
    ]
  };
};
