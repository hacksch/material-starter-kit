const path = require('path');

module.exports = [{
    mode: 'development',
    entry: ['./js/app.js'],
    output: {
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          include: [
            path.resolve(__dirname, 'scss')
         ],
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'bundle.css',
              },
            },
            { loader: 'extract-loader' },
            { loader: 'css-loader' },
            {
              loader: 'sass-loader'
            }
          ]
        },
        {
          test: /js\/\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
      ]
    },
    devServer: {
      static: { 
        directory: path.resolve(__dirname, './'), 
        publicPath: '/'
      }
    }
  }];