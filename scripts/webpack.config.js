/*
 * @Author: WangHao
 * @Date: 2023-01-04 15:23:04
 * @LastEditors: WangHao
 * @LastEditTime: 2023-04-03 22:56:05
 * @Description: 请添加当前文件描述
 */
// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
  entry: "./src/index.jsx",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('./index.html'),
    }),
    new MiniCssExtractPlugin({
			filename: './css/[name].min.css',
		}),
  ],
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
				include: [path.resolve('src')],
			},
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
        ],
      },
      {
        test: /\.less$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "less-loader",
        ],
      },
      {
        test: /\.(eot|otf|ttf|woff|woff2)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: './css',
              outputPath: '/',
              esModule: false,
            },
          }
        ],
        type: 'javascript/auto',
      },
      {
        test: /\.(svg|png|jpg|gif|jpeg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'img',
              esModule: false,
            },
          }
        ],
        type: "javascript/auto",
      },
    ],
  },
  resolve: {
		extensions: ['.js', '.jsx', '.less', '.css'],
		// 由于ts配置，为了ts文件识别别名，需在tsconfig.js文件compilerOptions.paths下同步配置别名及实际路径
		alias: {
			components: path.join(__dirname, '../src/components'),
			config: path.join(__dirname, '../src/config'),
			pages: path.join(__dirname, '../src/pages'),
			lib: path.join(__dirname, '../src/lib'),
      assets: path.join(__dirname, '../src/assets'),
      providers: path.join(__dirname, '../src/providers'),
      utils: path.join(__dirname, '../src/utils'),
      hooks: path.join(__dirname, '../src/hooks'),
		},
	},
};

module.exports = config;
