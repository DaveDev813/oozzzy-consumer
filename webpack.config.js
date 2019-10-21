const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const copyWebpackPlugin = require('copy-webpack-plugin');
const forkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  mode: "development",
  entry: ["react-hot-loader/patch", path.resolve(__dirname, 'src/index.tsx')],
  devtool: "cheap-module-eval-source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: miniCssExtractPlugin.loader
          },
          "css-loader"
        ]
      },
      {
        test: /\.(png|jpeg|jpg|gif|svg)$/i,
        loader: "file-loader",
        options: {
          outputPath: "/images/",
          name: "[path][name].[ext]"
        }
      },
      {
        test: /\.(ts|tsx)?$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-typescript"
              ],
              plugins: [
                "react-hot-loader/babel"
              ]
            }
          },
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(png|woff|woff2|eot|ttf)$/,
        loader: 'url-loader',
        options: {
          outputPath: '/fonts/'
        }
      }
      // {
      //   test: /\.(ts|tsx)$/,
      //   loader: "awesome-typescript-loader"
      // }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  output: {
    filename: "bundle.js"
    // publicPath: path.resolve(__dirname, "dist")
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 8080,
    index: "index.html",
    hot: true
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "./src/index.html",
      favicon: "./public/favicon.ico"
    }),
    new miniCssExtractPlugin({
      filename: "css/[name].css"
    }),
    new copyWebpackPlugin([
      { from: path.resolve(__dirname, 'public'), to: path.resolve(__dirname, 'dist') }
    ]),
    new forkTsCheckerWebpackPlugin({ silent: true }) //TS only
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        default: false
      }
    }
  }
};
