const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/main/index.js',
    giants: './src/projects/giants/giants.js',
    experiments: './src/projects/experiments/experiments.js',
    starmap: './src/challenge/1/starmap.js',
    hive: './src/challenge/4/hive.js',
    studentflow: './src/projects/studentflow/studentflow.js'
    //hap: './src/projects/hap/hap.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Gefylen',
      chunks: ['main']
    }),
    new HtmlWebpackPlugin({
      title: 'The greatest ape',
      chunks: ['giants'],
      filename: 'giants/index.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Experiments',
      chunks: ['experiments'],
      filename: 'experiments/index.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Starmap',
      chunks: ['starmap'],
      filename: '30daymapchallenge/1/index.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Hive',
      chunks: ['hive'],
      filename: '30daymapchallenge/4/index.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Student flow',
      chunks: ['studentflow'],
      filename: 'studentflow/index.html'
    }),
    // new HtmlWebpackPlugin({
    //   title: 'Hap',
    //   chunks: ['hap'],
    //   filename: 'hap/index.html'
    // })
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(csv|tsv)$/,
        loader: 'csv-loader',
        options: {
          dynamicTyping: true,
          header: true,
          skipEmptyLines: true
        }
      },
      {
        test: /\.xml$/,
        use: [
          'xml-loader',
        ],
      },
      {
        test: /\.svg$/,
        use: [
          'svg-inline-loader'
        ]
      },
    ]
  }
};