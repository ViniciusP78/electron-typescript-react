const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let base_config = {
    mode: 'development',
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
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public', 'index.html')
        }),
    ]
};

module.exports = [
  Object.assign({}, base_config, {
    target: 'electron-main',
    entry: {
      main: path.join(__dirname, 'src', 'main.ts')
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist')
    },
  }),
  Object.assign({}, base_config, {
    target: 'electron-renderer',
    entry: {
        app: path.join(__dirname, 'src', 'index.tsx')
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
  })
]