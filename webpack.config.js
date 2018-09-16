const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const autoprefixer = require('autoprefixer');
const port = require('./package.json').dev.port;
const dist = getPath('./dist');

function getPath(_path) {
    return path.resolve(__dirname, _path);
}

let config = {
    devtool: 'eval-source-map',
    entry: __dirname + '/src/app.js',
    output: {
        path: dist,
        chunkFilename: '[name].[chunkhash].js',
        filename: '[name].js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {loader: 'vue-style-loader'},
                    {loader: 'css-loader'},
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins:[
                                require("autoprefixer")({
                                    "browsers": [
                                        "defaults",
                                        "not ie < 11",
                                        "last 2 versions",
                                        "> 1%",
                                        "iOS 7",
                                        "last 3 iOS versions"
                                    ]
                                })
                            ]
                        }
                    }
                    
                ]
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    // loaders: {
                    //     less: 'vue-style-loader!css-loader!less-loader', // <style lang="less">
                    // },
                    // extractCSS: true
                }
            },
            {
                test: /^.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: path.resolve(__dirname, 'dist/index.html'),
            template: path.resolve(__dirname, './src/index.html'),
            inject: 'body',
            hash: true
        }),
        new VueLoaderPlugin(),
      
    ],
    resolve: {
        extensions: [ '.js', '.vue'],
        alias: {
            '~': path.resolve(__dirname, './src'),
            'vue': 'vue/dist/vue.js'
        }
    }
};

config.devServer = {
    // disableHostCheck: true,
    contentBase: dist,
    host: 'localhost',
    port: port,
    hot: false,
    inline: true,
    open: true,
    useLocalIp: true,
};

module.exports = config;