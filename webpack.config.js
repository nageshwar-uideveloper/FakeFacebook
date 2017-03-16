const webpack = require("webpack");
const path = require("path");
const merge = require("webpack-merge");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const APP_DIR = path.resolve(__dirname,"src/client/app");
const BUILD_DIR = path.resolve(__dirname,"src/client/public");
const NODE_MODULES = path.resolve(__dirname,"node_modules");

const config = {
    entry: APP_DIR+"/index.jsx",
    output: {
        path: BUILD_DIR,
        filename: "bundle.js"
    },
    module:{
        loaders:[
            {
                test: /\.jsx?$/,
                include: APP_DIR,
                loader: "babel",
                query: {
                    presets: ["es2015","react"]
                }
            },
            {
                test: /\.scss$/,
                include: APP_DIR,
                loader: ExtractTextPlugin.extract("style", "css?sourceMap!sass?sourceMap")
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style", "css?sourceMap")
            },
            {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/font-woff"
            }, {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/font-woff"
            }, {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/octet-stream"
            }, {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file"
            }, {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=image/svg+xml"
            },{
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: "file-loader?name=/public/icons/[name].[ext]"
            }
        ]
    },
    plugins:[
        new webpack.ProvidePlugin({
          $: "jquery",
          jQuery: "jquery",
          "window.jQuery": "jquery"
        }),
        new ExtractTextPlugin("styles.css")
    ],
    devServer:{
        port: 6500,
        contentBase: BUILD_DIR
    },
    resolve:{
        root: [APP_DIR, NODE_MODULES]
    }
};

module.exports = config;
