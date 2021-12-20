const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')

module.exports = {
  entry: path.join(__dirname, 'src', 'index.tsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  mode: 'development',
  devtool: 'inline-source-map',
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
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
    }),
    new MiniCssExtractPlugin(),
    new ESLintPlugin(),
  ],
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 8080,
    open: true,
    historyApiFallback: true,
  },
}
