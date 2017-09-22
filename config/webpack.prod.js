var path = require('path'),
    webpack = require('webpack');

module.exports = {
    devtool: '#source-map',

    entry: './src/index.js',

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules\/(?![gamee-js|module2])/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
    },

    output: {
        libraryTarget: 'umd',
        path: path.resolve(__dirname, '../dist'),
        filename: 'dist.min.js'
    },

    plugins: [
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new webpack.BannerPlugin({
            banner: `@preserve build time ${new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')}`
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            beautify: false,
            mangle: {
                screw_ie8: true,
                keep_fnames: true,
                toplevel: true
            },
            compress: {
                screw_ie8: true,
                sequences: true,
                properties: true,
                dead_code: true,
                drop_debugger: true,
                drop_console: false,
                conditionals: true,
                comparisons: true
            },
            comments: "some"
        })
    ]
}