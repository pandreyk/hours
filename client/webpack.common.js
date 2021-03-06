const Dotenv = require('dotenv-webpack')
const ESLintPlugin = require('eslint-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
const webpack = require('webpack')

module.exports = function (env, argv) {
  console.log('env', env)
  console.log('argv', argv)
  console.log('')

  return {
    entry: path.join(__dirname, 'src', 'index.tsx'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'main.js',
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      alias: {
        assets: path.resolve(__dirname, 'src/assets'),
        generic: path.resolve(__dirname, 'src/shared/generic'),
        containers: path.resolve(__dirname, 'src/shared/containers'),
        layouts: path.resolve(__dirname, 'src/shared/layouts'),
        formikFields: path.resolve(__dirname, 'src/shared/formikFields'),
        config: path.resolve(__dirname, 'src/config'),
        contexts: path.resolve(__dirname, 'src/contexts'),
        helpers: path.resolve(__dirname, 'src/helpers'),
        hooks: path.resolve(__dirname, 'src/hooks'),
        i18n: path.resolve(__dirname, 'src/i18n'),
        icons: path.resolve(__dirname, 'src/icons'),
        libs: path.resolve(__dirname, 'src/libs'),
        pages: path.resolve(__dirname, 'src/pages'),
        styles: path.resolve(__dirname, 'src/styles'),
        services: path.resolve(__dirname, 'src/services'),
        modules: path.resolve(__dirname, 'src/modules'),
        types: path.resolve(__dirname, 'src/types'),
        mocks: path.resolve(__dirname, 'src/mocks'),
        store: path.resolve(__dirname, 'src/store'),
      },
    },
    module: {
      rules: [
        {
          test: /\.?js$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
        {
          test: /\.?(ts|tsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
        {
          test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
          type: 'asset/inline',
        },
      ],
    },
    plugins: [
      new webpack.ProvidePlugin({
        process: 'process/browser',
      }),
      new Dotenv({ path: `./.env.${argv.mode}` }),
      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'src', 'index.html'),
      }),
      new MiniCssExtractPlugin(),
      new ESLintPlugin({
        files: './src/**/*.{ts,tsx,js,jsx}',
        emitError: true,
        emitWarning: false,
        failOnError: true,
        failOnWarning: false,
      }),
      new ForkTsCheckerWebpackPlugin(),
    ],
  }
}
