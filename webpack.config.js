const merge = require('webpack-merge');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const TARGET = process.env.npm_lifecycle_event;
const path = require('path');

const PATHS = {
	app: path.join(__dirname, 'src'),
	build: path.join(__dirname, 'build')
};

process.env.BABEL_ENV = TARGET;

const common = {
	entry: PATHS.app,
	resolve: {
    	extensions: ['', '.js', '.jsx']
  	},
	output: {
		path: PATHS.build,
		filename: 'bundle.js'
	},
	module: {
    	loaders: [
    		{
				test: /\.jsx?$/,
				loader: 'babel',
				query: {
					cacheDirectory: true,
					presets: ['react', 'es2015', 'survivejs-kanban']
  				},
				include: PATHS.app
			},
      		{
        		test: /\.css$/,
        		loaders: ['style', 'css'],
        		include: PATHS.app
      		},
      		{
        		test: /\.scss$/,
        		loaders: ['style', 'css', 'sass'],
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
			new webpack.HotModuleReplacementPlugin(),
			new HtmlWebpackPlugin({
				title: 'WikiLynx',
    			template: './src/index.html',
    			inject: 'body'
			})
		]
	});
}

if (TARGET === 'build') {
	module.exports = merge(common, {
		plugins: [
			new HtmlWebpackPlugin({
				title: 'Custom template',
    			template: './src/index.html', // Load a custom template 
    			inject: 'body' // Inject all scripts into the body )
			})
		]
	});
}