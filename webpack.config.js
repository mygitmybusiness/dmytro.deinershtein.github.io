const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env = {}, argv) => {
    const isProd = argv.mode === 'production';
    const defaultLang = env.lang || 'en';

    return {
        entry: './src/index.js',
        output: {
            filename: `${defaultLang}/bundle.[contenthash].js`,
            path: path.resolve(__dirname, 'dist'),
            clean: true,
            publicPath: '/',
        },
        mode: isProd ? 'production' : 'development',
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: 'babel-loader',
                },
                {
                    test: /\.less$/i,
                    use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'],
                },
                {
                    test: /\.css$/i,
                    use: [MiniCssExtractPlugin.loader, 'css-loader'],
                },
                {
                    test: /\.(png|jpe?g|gif|svg)$/i,
                    type: 'asset/resource',
                    generator: { filename: 'images/[name].[hash][ext]' },
                },
                {
                    test: /\.json$/i,
                    type: 'json',
                },
            ],
        },
        plugins: [
            new MiniCssExtractPlugin({ filename: `${defaultLang}/css/[name].[contenthash].css` }),
            new HtmlWebpackPlugin({
                title: 'My App',
                filename: `${defaultLang}/index.html`,
                template: './src/index.html',
                templateParameters: { lang: defaultLang },
            }),
            new CopyWebpackPlugin({ patterns: [{ from: path.resolve(__dirname, 'src/locales'), to: `${defaultLang}/locales` }] }),
            new webpack.DefinePlugin({ LANG: JSON.stringify(defaultLang) }),
        ],
        optimization: {
            minimize: isProd,
            minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
            splitChunks: { chunks: 'all' },
        },
        resolve: {
            extensions: ['.js', '.jsx', '.less', '.css', '.json'],
            fallback: { process: false },
            alias: {
                react: 'preact/compat',
                'react-dom': 'preact/compat',
            },
        },
        devServer: {
            static: { directory: path.join(__dirname, 'dist') },
            host: '0.0.0.0',
            port: 3000,
            open: true,
            hot: true,
            liveReload: true,
            watchFiles: ['src/**/*'],
            historyApiFallback: {
                index: `/${defaultLang}/index.html`
            },
        },
        devtool: isProd ? false : 'inline-source-map',
    };
};
