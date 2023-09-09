const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        'main' : './src/index.js',
        'login' : './src/LoginPage.js'
    },
    output : {
        filename : '[name].[contenthash].js',
        path : path.resolve(__dirname,'./dist'),
    },
    mode : 'production',
    optimization : {
        splitChunks : {
            chunks : 'all',
            minSize : 2000
        }
    },
    module : {
        rules : [
            {
                test : /\.(png|jpg)$/,
                type : 'asset'
            },
            {
                test : /\.(txt)$/,
                type : 'asset/source'
            },
            {
                test : /\.css$/,
                use : [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test : /\.scss$/,
                use : [MiniCssExtractPlugin.loader, 'css-loader','sass-loader']
            },
            {
                test : /\.js$/,
                exclude : /node_modules/,
                use : {
                    loader : 'babel-loader',
                    options : {
                        presets : ['@babel/env'],
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }
                }
            },
            {
                test : /\.hbs$/,
                use : ['handlebars-loader']
            }
        ]
    },
    plugins : [
        new TerserPlugin(),
        new MiniCssExtractPlugin({
            filename:'[name].[contenthash].css'
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename:'main.html',
            chunks : ['main'],
            template : './src/template.hbs',   
            title : 'Hello App',
            description : "This is a simple desc",
            minify:false    
        }),
        new HtmlWebpackPlugin({
            filename:'login.html',
            chunks : ['login'],
            template : './src/template.hbs',   
            title : 'Login to App',
            description : "Login into your account",
            minify:false    
        })
    ]
}