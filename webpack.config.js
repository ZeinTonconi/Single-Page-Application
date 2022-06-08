const htmlWebpackPlugin=require('html-webpack-plugin')
module.exports={
    entry: './src/main.js',
    output:{
        path:__dirname+'/dist',
        filename:'bundle.js'
    },
    module:{
        rules:[
            {
                test: /\.css$/i,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader','css-loader','sass-loader']
            }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}