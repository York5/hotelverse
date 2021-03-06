const path = require("path");
const glob = require("glob");
const HardSourceWebpackPlugin = require("hard-source-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
require("babel-polyfill");
module.exports = (env, options) => {
  const devMode = options.mode !== "production";

  return {
    optimization: {
      minimizer: [
        new TerserPlugin({ cache: true, parallel: true, sourceMap: devMode }),
        new OptimizeCSSAssetsPlugin({}),
      ],
    },
    // entry: {
    //   app: "./assets/js/app.js",
    // },
    entry: ["babel-polyfill", "./assets/js/app.js"],
    output: {
      filename: "app.js",
      path: path.resolve(__dirname, "priv/static/js"),
      publicPath: "/js/",
    },
    devtool: devMode ? "eval-cheap-module-source-map" : undefined,
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.[s]?css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({ filename: "../css/app.css" }),
      new CopyWebpackPlugin([{ from: "assets/static/", to: "../" }]),
    ].concat(devMode ? [new HardSourceWebpackPlugin()] : []),
    resolve: {
      extensions: [".js", ".jsx", ".json"],
    },
  };
};
