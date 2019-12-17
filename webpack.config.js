let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
    entry: {
        index : './src/main.js'
    },//入口文件
    output: {
        filename: "build.js",
        path: path.resolve("./dist")
    },
    module: {
        rules: [
            {test:/\.js$/,use:'babel-loader',exclude:'/node_modules/'},
            {test:/\.css$/,use:['style-loader,css-loader']},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            //转化base64只在8192字节以下转化，其他情况输出文件
            {test:/\.(jpg|png|gif)$/,use:'url-loader?limit=8192'}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            //filename: "login.html"//产出的文件名  默认是index.html
        })
    ]
}
