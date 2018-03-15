const path = require('path');
module.exports = {
  entry: './src/index.js',
    module: {
        rules: [
        {
            test: /\.js$/,
            use: {
            loader: 'babel-loader',
            options: {
                presets: [
                'env',
                'react',
                ],
            },
            },
            exclude: /node_modules/,
        },
        {
            test: /\.scss$/,
            use: [
            'style-loader',
            'css-loader',
            'sass-loader'
            ],
        },
        ],
    },
    output: {
        filename: 'bundle.min.js',
        path: path.join(__dirname, 'public'),
    },
};