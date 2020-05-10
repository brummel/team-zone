const path = require("path");
const nodeExternals = require("webpack-node-externals");

process.env.NODE_ENV = "development";

module.exports = {
  mode: "development",
  entry: "./src/server/index.ts",
  devtool: "inline-source-map",
  target: "node",
  node: {
    __dirname: false,
    __filename: false,
  },
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "/",
    filename: "server.js",
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};
