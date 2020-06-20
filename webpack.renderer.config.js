/* eslint-disable import/no-extraneous-dependencies */
const HTMLWeebPackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    target: 'electron-renderer',
    entry: './src/renderer/index.tsx',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            '@renderer': path.join(__dirname, 'src/renderer'),
            '@shared': path.join(__dirname, 'src/shared'),
        },
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HTMLWeebPackPlugin({
            template: './src/renderer/index.html',
            filename: './index.html',
        }),
    ],
};
