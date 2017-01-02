var path = require('path');
var webpack = require('webpack');
var ProvidePlugin = webpack.ProvidePlugin;
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: "source-map",

    entry: {
        app: './src/index.js',
        vendor: [
            'jquery',
            'angular',
            'angular-bootstrap',
            'bootstrap-sass',
            'jquery-ui',
            'jquery.ui.widget',
            'load-image',
            'canvas-to-blob',
            'jquery.iframe-transport',
            'jquery.fileupload',
            'jquery.fileupload-process',
            'jquery.fileupload-image',
            'jquery.fileupload-audio',
            'jquery.fileupload-video',
            'jquery.fileupload-validate'
        ]
    },

    output: {
        filename: '/js/[name].js',
        path: path.resolve(__dirname, './build'),
        publicPath: "/js/"
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                loaders: [
                    'ng-annotate',
                    'babel'
                ]
            },
            {
                test: /\.(jpg|png|gif)$/,
                loader: 'url?limit=25000'
            },
            {
                test: /\.html$/,
                loader: 'ngtemplate?relativeTo=' + (path.resolve(__dirname, './src')) + '/!html',
            },
            {
                test: /\.scss$/,
                loaders: ExtractTextPlugin.extract(['css', 'sass'])
            },
            // Font Definitions
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=65000&mimetype=image/svg+xml&name=fonts/[name].[ext]&publicPath=../../'
            },
            {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=65000&mimetype=application/font-woff&name=fonts/[name].[ext]&publicPath=../../'
            },
            {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=65000&mimetype=application/font-woff2&name=fonts/[name].[ext]&publicPath=../../'
            },
            {
                test: /\.[ot]tf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=65000&mimetype=application/octet-stream&name=fonts/[name].[ext]&publicPath=../../'
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=65000&mimetype=application/vnd.ms-fontobject&name=fonts/[name].[ext]&publicPath=../../'
            }
        ]
    },

    node: {
        fs: 'empty'
    },

    plugins: [
        new ExtractTextPlugin('/css/bundle.css'),

        new CommonsChunkPlugin({name: 'vendor', filename: '/js/vendor.js', minChunks: Infinity}),

        new ProvidePlugin({
            _: "lodash",
            $: "jquery",
            jQuery: "jquery",
            'window.jquery': 'jquery',
            'window.$': 'jquery',
            '$window.jQuery': 'jquery'
        })
    ],

    resolve: {
        alias: {
            'jquery.ui.widget': path.resolve(__dirname, './node_modules/blueimp-file-upload/js/vendor/jquery.ui.widget.js'),
            'jquery.iframe-transport': path.resolve(__dirname, './node_modules/blueimp-file-upload/js/jquery.iframe-transport.js'),
            'jquery.fileupload': path.resolve(__dirname, './node_modules/blueimp-file-upload/js/jquery.fileupload.js'),
            'jquery.fileupload-ui': path.resolve(__dirname, './node_modules/blueimp-file-upload/js/jquery.fileupload-ui.js'),
            'jquery.fileupload-video': path.resolve(__dirname, './node_modules/blueimp-file-upload/js/jquery.fileupload-video.js'),
            'jquery.fileupload-audio': path.resolve(__dirname, './node_modules/blueimp-file-upload/js/jquery.fileupload-audio.js'),
            'jquery.fileupload-image': path.resolve(__dirname, './node_modules/blueimp-file-upload/js/jquery.fileupload-image.js'),
            'jquery.fileupload-process': path.resolve(__dirname, './node_modules/blueimp-file-upload/js/jquery.fileupload-process.js'),
            'jquery.fileupload-validate': path.resolve(__dirname, './node_modules/blueimp-file-upload/js/jquery.fileupload-validate.js'),

            'load-image': path.resolve(__dirname, './node_modules/blueimp-load-image/js/index.js'),
            'load-image-exif': path.resolve(__dirname, './node_modules/blueimp-load-image/js/load-image-exif.js'),
            'load-image-meta': path.resolve(__dirname, './node_modules/blueimp-load-image/js/load-image-meta.js'),
            'canvas-to-blob': path.resolve(__dirname, './node_modules/blueimp-canvas-to-blob/js/canvas-to-blob.js'),
        }
    },

    target: 'web'
};