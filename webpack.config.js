/*
 * 创建一个简单的本地服务器
*/
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname, './dist/'),
        filename:'build.js'
    },
    devServer: {
        contentBase: "./static",
        host: 'localhost',
        inline: true,
        port: 8082
    }
    // rules: [
    //   {
    //     test: /\.(less|css)$/,
    //     use:[ 'style-loader','css-loader','less-loader']
    //   }
    // ]
    // module: {
    //     rules: [
    //       {
    //         test: /\.(less|css)$/,
    //         use: ExtractTextPlugin.extract({
    //           use:[ 'css-loader','less-loader'],
    //           fallback: 'style-loader',
    //         }),
    //       },
    //     ],
    // },
    // plugins: [
    //     new ExtractTextPlugin({
    //       filename: 'style.css',
    //       disable: false,
    //       allChunks: true,
    //     }),
    // ]
};
