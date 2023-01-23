const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    entry: "./src/client/js/main.js",
    mode: "development",
    watch: true,
    plugins: [
      new MiniCssExtractPlugin({
        filename: "css/styles.css",
      }),
    ],
  output: {
    filename: "js/main.js",
    path: path.resolve(__dirname, "assets"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
            // 여기 위 까지는 모든 webPack의 형식이 동일하게 적용되므로 기억하기.
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
      {
          //sass-loader : scss 파일을 css 파일로 전환.
          // css- loader : css 파일을 style loader에게 전달
          // styles-loader: 실질적으로 프론트 단에 보여지게함.
          test: /\.scss$/,
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      }
    ],
  },
};