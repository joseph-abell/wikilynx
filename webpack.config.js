const merge = require('webpack-merge');
const webpack = require('webpack');

const TARGET = process.env.npm_lifecycle_event;
const path = require('path');

const PATHS = {
	app: path.join(__dirname, 'src'),
	build: path.join(__dirname, 'build')
};

const common = {
	entry: PATHS.app,
	output: {
		path: PATHS.build,
		filename: 'bundle.js'
	},
	module: {
    	loaders: [
      		{
        		// Test expects a RegExp! Note the slashes!
        		test: /\.css$/,
        		loaders: ['style', 'css'],
        		// Include accepts either a path or an array of paths.
        		include: PATHS.app
      		},
      		{
        		// Test expects a RegExp! Note the slashes!
        		test: /\.scss$/,
        		loaders: ['style', 'css', 'sass'],
        		// Include accepts either a path or an array of paths.
        		include: PATHS.app
      		}
    	]
  	}
};

if (TARGET === 'start' || !TARGET) {
	module.exports = merge(common, {
		devServer: {
			contentBase: PATHS.build,
			historyApiFallback: true,
			hot: true,
			inline: true,
			progress: true,
			stats: 'errors-only',
			host: process.env.HOST,
			port: process.env.PORT
		},
		plugins: [
			new webpack.HotModuleReplacementPlugin()
		]
	});
}

if (TARGET === 'build') {
	module.exports = merge(common, {});
}