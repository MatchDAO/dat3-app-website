/*
 * @Author: WangHao
 * @Date: 2023-01-04 15:54:08
 * @LastEditors: WangHao
 * @LastEditTime: 2023-01-04 22:25:43
 * @Description: 请添加当前文件描述
 */
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackConfigBase = require('./webpack.config');

process.env.NODE_ENV = 'development';

const PORT = 3000;

const webpackConfigDev = {
	mode: 'development',
	devtool: 'source-map',
	devServer: {
		hot: true,
		historyApiFallback: true,
		host: '0.0.0.0',
		port: PORT,
		// proxy: {
		//   '/egate': {
		//     // target: 'http://192.168.65.43:8090',
		//     secure: false,
		//     changeOrigin: true,
		//   },
		// },
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development'),
			IS_DEVELOPMENT: true,
		}),
		new webpack.HotModuleReplacementPlugin(),
	],
};

module.exports = merge(webpackConfigBase, webpackConfigDev);
