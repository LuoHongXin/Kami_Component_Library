### 通过设置 entry 和 output 简单压缩js文件
不需要设置其它，只要设置 entry 入口和 output 出口便可以进行简单的压缩打包

## 如何安装webpack
 - 运行 npm install webpack -g 指令，全局安装webpack
 - 运行 npm install webpack-cli -g 指令，全局安装webpack脚手架
 - 运行 npm install webpack-dev-serve -s 指令，安装测试服务，可不装，主要是配合webpack.config中的devserve配置，在开发测试环境中使用，存在内存中，编译打包后就没了

 ### 遇到的问题
 1、entry设置的入口要写相对路径 ./ 否则会报not found main.js，output 的路径写 ./ 或是不写都可以。