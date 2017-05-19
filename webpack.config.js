const path = require('path');

const config = {
	context: __dirname,
	entry: './components/App.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'app.bundle.js'
	},
	devServer: {
    publicPath: '/dist/',
    historyApiFallback: true,
		port: 9001
  },
	module: {
		rules: [
			{include: path.resolve(__dirname, 'components'), test: /\.(js)$/, use: 'babel-loader'},
			{test: /\.(css)$/, use: [ 'style-loader', { loader: 'css-loader', options: { url: false } }]}
		]
	}
}

module.exports = config
