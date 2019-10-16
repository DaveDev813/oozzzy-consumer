const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, 'src/index.tsx'),
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

      // {
      //   test: /\.(js|jsx)$/,
      //   exclude: /node_modules/,
      //   use: ["babel-loader"]
      // },
      {
        test: /\.(png|jpeg|jpg|gif)$/i,
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
            loader: "babel-loader"
          }
        ]
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader"
          }
        ]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
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
    extensions: [".ts", ".tsx", ".js", ".jsx"]
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
      template: "./src/index.html"
    }),
    new miniCssExtractPlugin({
      filename: "css/[name].css"
    })
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        default: false
      }
    }
  }
};
