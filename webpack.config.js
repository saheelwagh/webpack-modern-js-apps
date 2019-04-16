const HTMLPlugin = require('html-webpack-plugin');
const extractPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: `${__dirname}/src/app/index.js`,
    output: {
        path: `${__dirname}/dist`,
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [{
            test: '/\.js$/',
            use: 'babel-loader',
            exclude: [
                /node_modules/
            ]
        }]
    },
    plugins: [
        new HTMLPlugin({
            template: `${__dirname}/src/public/index.html`,
            inject: 'body'
        }),
        new extractPlugin("styles.css")
    ],
    devServer: {
        contentBase: './src/public',
        port: 7000
    }
};