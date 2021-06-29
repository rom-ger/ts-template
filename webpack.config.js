const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    mode: 'none',
    entry: {
        app: path.join(__dirname, 'src', 'index.ts')
    },
    target: 'web',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
        ],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    optimization: {
        minimize: true,
        minimizer: [new UglifyJsPlugin()],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
    ]
}