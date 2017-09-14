var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports={
    entry:__dirname+"/src/main.js",
    output:{
        path:__dirname+"/dist",
        filename:"[name].js",
        chunkFilename:"[name].js"
    },			
    module:{
        rules:[
        {
            test:/\.js$/,
            use:["babel-loader"]
        },
        {
            test:/\.vue$/,
            include:/src/,
            use:["vue-loader"]
        },
        {
            test:/\.css$/,
            use:["style-loader","css-loader"]
        },
        {
            test:/\.html$/,
            loader:"html-loader"
        },
        {
            test:/\.png|.jpg$/,
            loader:"url-loader"
        }]
    },
    devServer:{
        port:9000,
        host: 'localhost',
        hot:true,
        contentBase:__dirname+"./src/static",
        watchContentBase:true
    },
    resolve:{
        alias:{
            "vue":"vue/dist/vue.js"
        }
    },
    plugins:[
        // new webpack.optimize.UglifyJsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template:"./index.html"
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name:"common",
            filename:"common"
        })
    ]
}