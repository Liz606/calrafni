var path = require('path');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var HtmlWebpackPlugin=require('html-webpack-plugin');
var ExtractTextPlugin=require('extract-text-webpack-plugin');
var webpack=require('webpack');
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
module.exports = {
    entry:{
        'index':  path.join(APP_PATH,'js/index'),
        'about':  path.join(APP_PATH,'js/about'),
        'news':  path.join(APP_PATH,'js/news'),
        'stores':  path.join(APP_PATH,'js/stores'),
        'join':  path.join(APP_PATH,'js/join'),
        'contact':  path.join(APP_PATH,'js/contact'),
        'lookbook':  path.join(APP_PATH,'js/lookbook'),
        'lookbookslider':  path.join(APP_PATH,'js/lookbookslider'),
        'product':  path.join(APP_PATH,'js/product'),
        'detail':  path.join(APP_PATH,'js/detail'),
        'news-detail':  path.join(APP_PATH,'js/news-detail'),
        'about-culture':  path.join(APP_PATH,'js/about-culture'),
        'about-history':  path.join(APP_PATH,'js/about-history'),
        'vendor':['jquery']
    },
    output: {//输出文件
        path: path.join(BUILD_PATH,'./'),// 输出js和图片的目录
        filename:'js/[name].bundle.js',
        publicPath: '',//生成的js和图片加上publicPath才能在生成的html文件中被正确访问
    },
    module: {//模块加载器配置
        loaders: [{
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style', 'css')
        }, {
            test: /\.html$/,
            exclude: '/node_modules/',
            loader: 'html-loader'
        },{
          test: /\.js?$/,
          exclude: '/node_modules/',
          loaders:['babel-loader'] 
        },{
          test: /\.vue?$/,
          loaders:['vue'] 
        },{
            test: /\.(ttf|eot|otf|woff)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'url-loader?limit=1&name=./[name].[ext]'//&连接，相对于html
        }, {
            test: /\.(svg|png|gif|jpg|mp4)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            exclude: './src/css/',
            loaders: [
            'url-loader?limit=1&name=./images/[name].[ext]'//&连接，相对于html
            ]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: './index.html',//相对js输出文件抽离html文件的输出路径
            template: './src/index.html',
            chunks: ['index','vendor']
        }),
        new HtmlWebpackPlugin({
            filename: './news.html',//相对js输出文件抽离html文件的输出路径
            template: './src/news.html',
            chunks: ['news','vendor']
        }),
        new HtmlWebpackPlugin({
            filename: './join.html',//相对js输出文件抽离html文件的输出路径
            template: './src/join.html',
            chunks: ['join','vendor']
        }),
        new HtmlWebpackPlugin({
            filename: './about.html',//相对js输出文件抽离html文件的输出路径
            template: './src/about.html',
            chunks: ['about','vendor']
        }),
        new HtmlWebpackPlugin({
            filename: './about-culture.html',//相对js输出文件抽离html文件的输出路径
            template: './src/about-culture.html',
            chunks: ['about-culture','vendor']
        }),
        new HtmlWebpackPlugin({
            filename: './about-history.html',//相对js输出文件抽离html文件的输出路径
            template: './src/about-history.html',
            chunks: ['about-history','vendor']
        }),
        new HtmlWebpackPlugin({
            filename: './lookbook.html',//相对js输出文件抽离html文件的输出路径
            template: './src/lookbook.html',
            chunks: ['lookbook','vendor']
        }),
         new HtmlWebpackPlugin({
            filename: './lookbook-spring.html',//相对js输出文件抽离html文件的输出路径
            template: './src/lookbook-spring.html',
            chunks: ['lookbookslider','vendor']
        }),
        new HtmlWebpackPlugin({
            filename: './lookbook-summer.html',//相对js输出文件抽离html文件的输出路径
            template: './src/lookbook-summer.html',
            chunks: ['lookbookslider','vendor']
        }),
        new HtmlWebpackPlugin({
            filename: './lookbook-autumn.html',//相对js输出文件抽离html文件的输出路径
            template: './src/lookbook-autumn.html',
            chunks: ['lookbookslider','vendor']
        }),
        new HtmlWebpackPlugin({
            filename: './lookbook-winter.html',//相对js输出文件抽离html文件的输出路径
            template: './src/lookbook-winter.html',
            chunks: ['lookbookslider','vendor']
        }),
        new HtmlWebpackPlugin({
            filename: './product.html',//相对js输出文件抽离html文件的输出路径
            template: './src/product.html',
            chunks: ['product','vendor']
        }),
        new HtmlWebpackPlugin({
            filename: './product-spring.html',//相对js输出文件抽离html文件的输出路径
            template: './src/product-spring.html',
            chunks: ['product','vendor']
        }),
        new HtmlWebpackPlugin({
            filename: './product-summer.html',//相对js输出文件抽离html文件的输出路径
            template: './src/product-summer.html',
            chunks: ['product','vendor']
        }),
        new HtmlWebpackPlugin({
            filename: './product-autumn.html',//相对js输出文件抽离html文件的输出路径
            template: './src/product-autumn.html',
            chunks: ['product','vendor']
        }),
        new HtmlWebpackPlugin({
            filename: './product-winter.html',//相对js输出文件抽离html文件的输出路径
            template: './src/product-winter.html',
            chunks: ['product','vendor']
        }),
        new HtmlWebpackPlugin({
            filename: './detail.html',//相对js输出文件抽离html文件的输出路径
            template: './src/detail.html',
            chunks: ['detail','vendor']
        }),
        new HtmlWebpackPlugin({
            filename: './news-detail.html',//相对js输出文件抽离html文件的输出路径
            template: './src/news-detail.html',
            chunks: ['news-detail','vendor']
        }),
        new HtmlWebpackPlugin({
            filename: './stores.html',//相对js输出文件抽离html文件的输出路径
            template: './src/stores.html',
            chunks: ['stores','vendor']
        }),
        new HtmlWebpackPlugin({
            filename: './contact.html',//相对js输出文件抽离html文件的输出路径
            template: './src/contact.html',
            chunks: ['contact','vendor']
        }),
        new BrowserSyncPlugin({
          host: 'localhost',
          port: 3000,
          server: { baseDir: ['./build/'] }
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        new ExtractTextPlugin('./[name].css'),//抽离css文件
        new webpack.optimize.CommonsChunkPlugin('vendor','js/vendor.bundle.js')//name 是配置文件里面入口文件的键名，filename 是输出的文件名。
      ],
      resolve: {
        extensions: ['','.jsx', '.js', '.json', '.coffee', '.css','.vue'] 
        // 现在可以写 require('file') 代替 require('file.coffee')
      }
};


