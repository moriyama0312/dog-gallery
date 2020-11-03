const path = require('path');

module.exports = {
	entry: './src/ts/index.ts',
	module: {
		rules: [
			{	
				enforce: 'pre',
				loader: 'eslint-loader',
				test: /\.(js|ts)$/,
				exclude: /node_modules/
			},
			{
				loader: 'ts-loader',
				test: /\.ts?$/,
				exclude: /node_modules/,
				options: {
					configFile: 'tsconfig.json'
				}
			}
		]
	},
	output: {
		filename: 'main.bundle.js',
		path: path.resolve(__dirname, 'dist/assets/js/')
	},
	resolve: {
		extensions: ['.ts', '.js', '.tsx']
	}
}