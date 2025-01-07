const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    library: "react-iconic",
    libraryTarget: "umd",
    globalObject: "this",
  },
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
        test: /\.svg$/,
        use: ["babel-loader", "url-loader"],
      },
    ],
  },
  performance: {
    hints: "warning", // Show warnings for large files
    maxAssetSize: 1024000, // 1 MB limit for individual assets
    maxEntrypointSize: 1024000, // 1 MB limit for entry points
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  externals: {
    react: "react",
    "react-dom": "react-dom",
  },
  mode: "production", // Set the mode explicitly
};
