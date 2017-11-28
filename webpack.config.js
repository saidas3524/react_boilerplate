const  path= require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');


const VENDOR_LIBS = [
  'react','faker', 'lodash', 'redux', 'react-redux', 'react-loadable', 
  'react-dom', 'redux-form', 'redux-thunk','bootstrap','jquery'
];

module.exports = {
  entry: {
    bundle: ['babel-polyfill','./src/index.js'],
    vendor: VENDOR_LIBS
  },
  output: {
    path: path.join(__dirname,"build"),
    publicPath: '/',
    filename: '[name].[chunkhash].js',
    libraryTarget: 'commonjs2' // THIS IS THE MOST IMPORTANT LINE! :mindblow: I wasted more than 2 days until realize this was the line most important in all this guide.
  },
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015', 'stage-1'],
        plugins: ['transform-object-rest-spread']
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
      test: /\.(jpe?g|png|gif|svg|eot|ttf|woff|woff2)$/,
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
    new webpack.ProvidePlugin({
      $:"jquery",
      jQuery:"jquery"
    }),
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
