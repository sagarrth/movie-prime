const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const config = {
	entry: './components/App.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'app.bundle.js'
	},
	module: {
		rules: [
			{include: path.resolve(__dirname, 'components'), test: /\.(js)$/, use: 'babel-loader'},
			{test: /\.(css)$/, use: [ 'style-loader', { loader: 'css-loader', options: { url: false } }]}
		]
	},
	plugins: [
		new HtmlWebPackPlugin({template: 'index.html'})
	]
}

module.exports = config
