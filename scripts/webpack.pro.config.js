/*
 * @Author: WangHao
 * @Date: 2023-01-04 15:54:08
 * @LastEditors: WangHao
 * @LastEditTime: 2023-01-14 14:44:50
 * @Description: 请添加当前文件描述
 */
const path = require("path");
const merge = require('webpack-merge');
const webpack = require('webpack');
const webpackConfigBase = require('./webpack.config');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const optimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const cleanWebpackPlugin = require('clean-webpack-plugin');

process.env.NODE_ENV = 'production';

const webpackConfigPro = {
	mode: 'production',
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: 'js/[name].bundle.js',
    publicPath: './',
  },
	plugins: [
		new cleanWebpackPlugin.CleanWebpackPlugin(),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production'),
			IS_DEVELOPMENT: false,
		}),
		new optimizeCssAssetsWebpackPlugin(),
		// new BundleAnalyzerPlugin(),
	],
	optimization: {
		usedExports: true,
		minimize: true,
		minimizer: [
			new UglifyJsPlugin({
				exclude: /node_modules/,
				uglifyOptions: {
					output: {
						comments: false, // 删除注释
					},
					compress: {
						// warnings: false, // 删除console信息
						drop_debugger: true,
						drop_console: false,
						// 如需要保留console.error，可启用此配置，否则warnings:false将移除所有console信息
						pure_funcs: [
							'console.log',
							'console.warn',
							'console.time',
							'console.timeEnd',
							'console.trace',
						],
					},
					mangle: true,
				},
			}),
		],
		splitChunks: {
			maxSize: 524288, // 512K
			cacheGroups: {
				vendors: {
					chunks: 'all', // node_modules下依赖不管同步/异步模块都打包进来
					test: /[\\/]node_modules[\\/]/, // node_modules下的模块打包块
					priority: 2,
					reuseExistingChunk: true,
					minSize: 0, // 大小限制
					minChunks: 1, // 最少复用过几次
					name: 'vendors',
					maxSize: 1048576, // 1M
					minSize: 524288, // 512K
				},
				components: {
					chunks: 'all',
					reuseExistingChunk: true,
					priority: 3, // 优先级
					test: /src\/components/,
					enforce: true,
					name: 'components',
				},
				text: {
					chunks: 'all',
					reuseExistingChunk: true,
					priority: 4, // 优先级
					test: /assets\/text/,
					name: 'text',
					enforce: true
				},
			},
		},
	},
};

module.exports = merge(webpackConfigBase, webpackConfigPro);
