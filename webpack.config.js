var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const https = require('https');
const fs = require('fs');

var config = {
    entry:  [
        'webpack-dev-server/client?https://webpack.gio.ru/',
        'webpack/hot/only-dev-server',
        //__dirname + "/src/index.js"
        __dirname +"/src/main.js"
    ],
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module:{
        loaders: [
            {
                // test: /\.js?$/,
                // exclude: [/node_modules/,/public/],
                // loader: 'babel-loader',
                // query: {
                //     presets:['es2015','react']
                // }

                //test: /\.js$/,
                //loaders: ['react-hot-loader', 'babel-loader?presets[]=es2015&presets[]=react'],
                //exclude: [/node_modules/, /public/]
                test: /\.js$/,
                loaders: ['react-hot-loader', 'babel-loader?presets[]=es2015&presets[]=react&plugins[]=transform-object-rest-spread','babel-loader?presets[]=es2016&presets[]=react&plugins[]=transform-object-rest-spread'],
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.css$/,
                // loader: "style-loader!css-loader!autoprefixer-loader",
                use: ExtractTextPlugin.extract({fallback:"style-loader", use:"css-loader"}),
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.gif$/,
                loader: "url-loader?limit=10000&mimetype=image/gif"
            },
            {
                test: /\.jpg$/,
                loader: "url-loader?limit=10000&mimetype=image/jpg"
            },
            {
                test: /\.png$/,
                loader: "url-loader?limit=10000&mimetype=image/png"
            },
            {
                test: /\.svg/,
                loader: "url-loader?limit=26000&mimetype=image/svg+xml"
            },
            {
                //test: /\.jsx$/,
                //loader: "react-hot!babel",
                //exclude: [/node_modules/]
                test: /\.jsx$/,
                loaders: ['react-hot-loader', 'babel-loader?presets[]=es2015&presets[]=react&plugins[]=transform-object-rest-spread','babel-loader?presets[]=es2016&presets[]=react&plugins[]=transform-object-rest-spread'],
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.json$/,
                loader: "json-loader"
            },
            {
              test:   /\.jade$/,
              loader: "jade"
            },{
              test:   /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
              loader: 'file-loader?name=[name].[ext]?[hash]'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new ExtractTextPlugin("bundle.css")
    ],
    devServer: {
        port:57777,
        compress: true,
        historyApiFallback: true,
        contentBase: './',
        hot: true,
        disableHostCheck: true,   // That solved it
        public: 'webpack.gio.ru'
        //historyApiFallback: true

    }
    // devServer: {
    //     port:10000,
    //     hot: true,
    //     compress: true,
    //     public: 'reactor.gio.ru',
    //     https: true,
    //     contentBase: __dirname
    // }
}

/*
 * If bundling for production, optimize output
 */
if (process.env.NODE_ENV === 'production') {
  config.devtool = false;
  config.plugins = [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({comments: false}),
    new webpack.DefinePlugin({
      'process.env': {NODE_ENV: JSON.stringify('production')}
    })
  ];
};

module.exports = config;
