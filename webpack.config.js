var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var basePath = __dirname;

module.exports = {
	context: path.join(basePath, 'src'),
	resolve: {
		extensions: ['', '.js', '.ts', '.tsx']
	},
	
	entry: [
		'./main.tsx',
		'../node_modules/bootstrap/dist/css/bootstrap.css' 
	],
	output: {
		path: path.join(basePath, 'dist'),
		filename: 'bundle.js'
	},
	
	devtool: 'source-map',
	
	devServer: {
		contentBase: './dist',
		inline: true,
		host: 'localhost',
		port: 8080,
		stats: 'errors-only'
	},
	
	module: {
		loaders: [
		  {
			test: /\.(ts|tsx)$/,
			exclude: /node_modules/,
			loader: 'ts-loader'
		  },
		  {
			test: /\.css$/,
			loader: 'style-loader!css-loader'
   		  },
			// Loading glyphicons => https://github.com/gowravshekar/bootstrap-webpack
			// Using here url-loader and file-loader
		  {
			test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
			loader: 'url?limit=10000&mimetype=application/font-woff'
		  },
		  {
			test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
			loader: 'url?limit=10000&mimetype=application/octet-stream'
		  },
		  {	
			test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
			loader: 'file'
		  },
		  {
			test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
			loader: 'url?limit=10000&mimetype=image/svg+xml'
		  }
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'index.html',
			hash: true
		})
	]
}