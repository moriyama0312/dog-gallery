const path = require('path');

module.exports = {
	entry: './src/tsx/index.tsx',
	module: {
		rules: [
			{
				enforce: 'pre',
				loader: 'eslint-loader',
				test: /\.(js|ts|tsx)$/,
				exclude: /node_modules/
			},
			{
				loader: 'ts-loader',
				test: /\.tsx?$/,
				exclude: /node_modules/,
				options: {
					configFile: 'tsconfig.json'
				}
			},
			{
				test: /\.scss?$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							modules: true
						}
					},
					'sass-loader'
				]
			}
		]
	},
	output: {
		filename: 'main.bundle.js',
		path: path.resolve(__dirname, 'dist/assets/js/')
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', 'scss', 'css']
	}
}
