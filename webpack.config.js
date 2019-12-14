const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const copyWebpackPlugin = require('copy-webpack-plugin');
const forkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = (env) => {
  const isProd = env === 'production' ? true : false;

  return {
    mode: env,
    entry: ["react-hot-loader/patch", path.resolve(__dirname, 'src/index.tsx')],
    devtool: isProd ? "nosources-source-map" : "cheap-module-eval-source-map",
    module: {
      rules: [
        {
          test: /\.module\.s(a|c)ss$/,
          use: [
            {
              loader: miniCssExtractPlugin.loader,
              options: {
                hmr: !isProd,
                reloadAll: true
              }
            },
            {
              loader: 'css-loader',
              options: {
                modules: true,
                sourceMap: !isProd
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: !isProd
              }
            }
          ]
        },
        {
          test: /\.s(a|c)ss$/,
          exclude: /\.module.(s(a|c)ss)$/,
          use: [
            {
              loader: miniCssExtractPlugin.loader,
              options: {
                hmr: !isProd,
                reloadAll: true
              }
            },
            'css-loader',
            {
              loader: 'sass-loader',
              options: {
                sourceMap: !isProd
              }
            }
          ]
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: miniCssExtractPlugin.loader,
              options: {
                hmr: isProd
              }
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
      ]
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx", ".scss"],
    },
    output: {
      filename: isProd ? "bundle.min.js" : "bundle.js",
      // publicPath: '/'
    },
    devServer: {
      contentBase: path.join(__dirname, "src"),
      compress: true,
      port: 8080,
      hot: true,
      historyApiFallback: true,
    },
    plugins: [
      new htmlWebpackPlugin({
        template: "./src/index.html",
        favicon: "./public/favicon.ico",
        // minify: isProd
      }),
      new miniCssExtractPlugin({
        filename: "css/[name].css"
      }),
      new copyWebpackPlugin([
        { from: path.resolve(__dirname, 'public'), to: path.resolve(__dirname, 'dist') }
      ]),
      new forkTsCheckerWebpackPlugin({ silent: true }) //TS only
    ]
  };

}
