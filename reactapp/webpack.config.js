const webpack = require("webpack");
const path = require("path");

const APP_DIR = path.resolve(__dirname, "ClientApp");
//const BUILD_DIR = path.resolve(__dirname, "build");
const PUBLIC_DIR = path.resolve(__dirname, "public");
const config = {
  entry: APP_DIR + "/Components/Client.js",
  devServer: {
    contentBase: PUBLIC_DIR,
    port: 9000,
    open: true, //This will open browser automatically,
    historyApiFallback: true //Tells webpack dev server donot return 404 not found error if route not found
  },
  output: {
    path: PUBLIC_DIR,
    filename: "bundle.js"
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            "react",
            "stage-2",
            ["env", { target: { browsers: ["last 2 version"] } }]
          ]
        }
      }
    ]
  }
};

module.exports = config;
