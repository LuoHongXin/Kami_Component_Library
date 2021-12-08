module.exports = {
    mode: "development",
    entry: './main.js',
    // output: {
    //     filename: 'bundle.js'
    // },
    module: {
        rules: [{
            test: /\.js?$/,
            use: ['babel-loader']
        }]
    }
}