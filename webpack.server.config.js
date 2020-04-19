const path = require("path");
const nodeExternals = require("webpack-node-externals");

process.env.NODE_ENV = "development";

module.exports = {
  mode: "development",
  entry: "./src/server/index.js",
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "/",
    filename: "server.js",
  },
  target: "node",
  node: {
    __dirname: false,
    __filename: false,
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
};
