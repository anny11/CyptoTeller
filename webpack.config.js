var webpack = require('webpack');
var path = require('path');

var parentDir = path.join(__dirname, './src');

module.exports = {
    entry: [
        path.join(parentDir, 'index.js')
    ],
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
                exclude: /node\_modules/,
                loader: 'babel-loader'
            },{
                test: /\.less$/,
                loaders: ["style-loader", "css-loder", "less-loader"]
            },{
                test: /\.css$/,
                use: [
                  "style-loader",
                  {
                    loader: "css-loader",
                    options: {
                      modules: true, // default is false
                      sourceMap: true,
                      importLoaders: 1
                      //localIdentName: "[name]--[local]--[hash:base64:8]"
                    }
                  },
                  {
                    loader: 'postcss-loader',
                    options: {
                      plugins: () => [require('autoprefixer')]
                    }
                  }
                ]
              }
        ]
    },
    output: {
        path: parentDir + '/dist',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: parentDir,
        historyApiFallback: true
    }
}