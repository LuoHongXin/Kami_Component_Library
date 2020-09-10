### 使用loader加载器
css-loader 和 style-loader 是分别编译css文件为js的写法，然后用style-loader写入html作为内联样式

- 首先安装加载器
npm install --save-dev xxx-loader
- 然后在webpack.config.js中可直接使用
```js
module.exports = {
    entry: './main.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {test: /\.css$/,loader: 'style-loader!css-loader'}//同个文件需要多个加载器处理时，可用!隔开
        ]
    }
}
```