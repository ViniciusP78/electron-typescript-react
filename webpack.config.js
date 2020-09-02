const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        app: path.join(__dirname, 'src', 'index.tsx')
    },
    target: 'web',
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            {
              test: /\.tsx?$/,
              use: 'ts-loader',
              exclude: '/node_modules/'
            },
            {
              test: /\.css$/i,
              use: ['style-loader', 'css-loader'],
						},
						{
							test: /\.(png|jpe?g|gif|svg)$/i, // SVGs could be more optimized
							loader: 'file-loader',
							options: {
								outputPath: 'assets'
							}
						}
        ],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public', 'index.html')
        })
    ]
}