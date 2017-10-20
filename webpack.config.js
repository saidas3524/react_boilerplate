const  path= require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');


const VENDOR_LIBS = [
  'react','faker', 'lodash', 'redux', 'react-redux', 
  'react-dom', 'redux-form', 'redux-thunk'
];

module.exports = {
  entry: {
    bundle: './src/index.js',
    vendor: VENDOR_LIBS
  },
  output: {
    path: path.join(__dirname,"build"),
    publicPath: '/',
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }
    ,
    {
      loader: ExtractTextPlugin.extract({
        use: 'css-loader'
      }),
      test: /\.css$/
    },
    {
      test: /\.(jpe?g|png|gif|svg)$/,
      use:[
        {
        loader: 'url-loader',
        options: {limit:40000}
        },
        'image-webpack-loader'
      ]
    }
    ]
  },
  plugins:[
    new ExtractTextPlugin('style.css'),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor','manifest']
    }),
    new HTMLWebpackPlugin(
      {
        template: 'src/index.html'
      }
    )
  ],
  resolve: {
    extensions: [ '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
