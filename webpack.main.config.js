const path = require("path");

// webpack.config.js
module.exports = [
  {
    target: "electron-main",
    mode: "development",
    entry: "./src/main/index.ts",
    module: {
      rules: [
        {
          test: /\.ts$/,
          include: /src/,
          use: [{ loader: "ts-loader" }],
        },
      ],
    },
    output: {
      path: `${__dirname}/dist`,
      filename: "main.js",
    },
    resolve: {
      extensions: [".ts", ".js"],
      alias: {
        "@main": path.join(__dirname, "src/main"),
        "@shared": path.join(__dirname, "src/shared"),
      },
    },
  },
];
