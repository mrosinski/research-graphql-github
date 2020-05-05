import path from 'path'
import webpack from 'webpack'
import webpackMerge from 'webpack-merge'
import PnpWebpackPlugin from 'pnp-webpack-plugin'
import ForkTsCheckerNotifierWebpackPlugin from 'fork-ts-checker-notifier-webpack-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { getCustomTransformers } from './webpack.ts-transformers'

const baseConfig: webpack.Configuration = {
  context: __dirname,
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, './build'),
  },

  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true, // typechecking is done by ForkTsCheckerWebpackPlugin
          getCustomTransformers,
        },
      },
    ],
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    plugins: [PnpWebpackPlugin],
  },

  resolveLoader: {
    plugins: [PnpWebpackPlugin.moduleLoader(module)],
  },

  plugins: [new HtmlWebpackPlugin()],
}

const devConfig: webpack.Configuration = {
  mode: 'development',
  devtool: 'inline-source-map',

  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom', // ref: https://github.com/gaearon/react-hot-loader#hot-loaderreact-dom
    },
  },

  devServer: {
    port: 8000,
    hot: true,
    historyApiFallback: true,
  },

  plugins: [
    new ForkTsCheckerWebpackPlugin({
      checkSyntacticErrors: true,
    }),
    new ForkTsCheckerNotifierWebpackPlugin(),
  ],
}

export default webpackMerge(baseConfig, devConfig)
