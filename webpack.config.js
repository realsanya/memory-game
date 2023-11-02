const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: process.env.NODE_ENV || 'production',
    entry: './src/script.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.[contenthash].js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: 'babel-loader',
            exclude: /node_modules/,
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
        }, {
            test: /\.svg$/,
            type: 'asset/resource',
        }, {
            test: /\.(ts|tsx)$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }, {
            test: /\.(png|jpe?g|gif)$/i,
            loader: 'file-loader',
            options: {
                name: '[path][name].[ext]',
            },
        },]
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx'],
    },
    plugins: [new HTMLWebpackPlugin({
        template: './src/index.html'
    })]
}
