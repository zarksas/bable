const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// eslint-disable-next-line no-undef
const path = require("path");

module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: {
    home: "./index.js",
  },
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "boundle.js",
  },
  module: {
    rules: [
      { test: /\.svg$/i, use: "svg-inline-loader" },
      { test: /\.css$/i, use: ["style-loader", "css-loader"] },
      { test: /\.(js)$/i, use: "babel-loader" },
      {
        test: /\.(png)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Intocode Coding Bootcamp",
      // Load a custom template (lodash by default)
      template: "./index.html",
    }),
    new CleanWebpackPlugin(),
  ],
  resolve: {
    extensions: [".js", ".json", ".css"],
  },
};
