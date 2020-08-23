const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCSSExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    entry: {
        filename: "./src/index.js"
    },

    output: {
        filename: "./build/[name].bundle.js"
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
        ],
    },

    plugins: [
        new MiniCSSExtractPlugin({
            filename: "./src/style.css"
        }),
        new HtmlWebpackPlugin({
            filename: "./src/index.html",
           title: "App no create for webpack" 
        }),
    ] 
    
}