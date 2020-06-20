## 模仿jQuery的tmpl模板
### 引入该js将会生成一个全局的方法tmpl
* 在{%  %} 里面可以在html里面写js语法的代码
* 若是简单的html文件，仅有元素标签，则可以直接使用{%  %}
* 若是在html标签里写，正常用！快捷键建设的html文件，则要在如下script标签里写并嵌入进html里面
```html
<script id="tableTemplate" type="x-tmpl">
</script>
```
* 变量：{%= 变量 %} //可用三目运算等等
* js代码：{% for()|| if || else %} //各种js代码


