const HtmlWebPackPlugin = require("html-webpack-plugin");
const DotEnv = require("dotenv-webpack");
const path = require("path")

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html'
});
const dotEnv = new DotEnv();

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    app: [
      "./src/main.tsx",
    ]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    // publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: {
          loader: "ts-loader"
        },
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(png|jpg)$/,
        use: [
          {
            loader: "file-loader"
          }
        ],
      },
      {
        test: /\.(c|sa)ss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              // modules: true, // CSS Moduleを利用する
              url: false, // CSS内での画像等への参照でurl()メソッドを使用している場合にそれもバンドルの対象にするか
              sourceMap: process.env.NODE_ENV === "development", //ソースマップをdevelopmentの時のみ利用
              importLoaders: 2  // css-loader適用前にsass-loaderが適用される
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: process.env.NODE_ENV === "development", //ソースマップをdevelopmentの時のみ利用
            }
          },
        ]
      }
    ],
  },
  resolve: {
    extensions: [ ".js", ".ts", ".tsx", ".css", ".sass" ],
  },
  plugins: [
    htmlWebpackPlugin,
    dotEnv,
  ]
};