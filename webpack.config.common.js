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
            test: /\.s?css$/,
            use: [
            'style-loader',
            'css-loader',
            'sass-loader'
            ],
        },
        {
            test: /\.(png|jpg|gif)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  limit: 8192
                }
              }
            ]
        }
        ],
    },
    output: {
        filename: 'bundle.min.js',
        path: path.join(__dirname, 'public'),
    },
};