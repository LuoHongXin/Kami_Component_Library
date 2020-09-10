###### 练习多个入口情况以及使用出口的占位符来确保每一个文件具有唯一的名称

#### 多个入口：
entry可以是个对象，key值就是给要打包的模块命名，value值就是文件入口路径。

#### output的占位符：
- hash: 模块标识符的hash
- chunkhash: chunk内容的hash
- name: 模块的名称
- id: 模块标识符
- query: 模块的query，例如，文件名 ? 后面的字符串
用[]包起来，给output的filename输出路径作为变量。

```hash
module.exports = {
    entry: {
        bundle1: './main1.js',
        bundle2: './main2.js'
    },
    output: {
        filename: '[name][hash].js'
    }
}
```
