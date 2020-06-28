## ajaxform主要是为了解决使用form表单提交时无法对form表单的请求进行js控制
* 如果是用js进行表单内容提交，可以直接在对应的js对请求进行设置，但是form表单除了监听change或click却不能控制请求设置
## ajaxform的使用，首先引入jQuery依赖，再引入jquery.form
``` js
 $("form").ajaxForm({
    url:url,　　　　　　//form提交数据的地址
    type:type,　　　  //form提交的方式(method:post/get)
    target:target,　　//服务器返回的响应数据显示的元素(Id)号
    beforeSerialize:function(){} //序列化提交数据之前的回调函数
    beforeSubmit:function(){},　　//提交前执行的回调函数
    success:function(){},　　　　   //提交成功后执行的回调函数
    error:function(){},             //提交失败执行的函数
    dataType:null,　　　　　　　//服务器返回数据类型
    clearForm:true,　　　　　　 //提交成功后是否清空表单中的字段值
    restForm:true,　　　　　　  //提交成功后是否重置表单中的字段值，即恢复到页面加载时的状态
    timeout:6000 　　　　　 　 //设置请求时间，超过该时间后，自动退出请求，单位(毫秒)。　　
})
```
### 除了ajaxform可以对form元素进行请求的设置之外，还有ajaxsubmit方法，改方法用法和ajaxform一样
#### ajaxform和ajaxsubmit的区别：
  这两种方法主要的却别是ajaxForm不能主动提交form，函数只是为提交表单做准备需要以submit来触发提交。
  而ajaxSubmit会主动提交表单，同时可以在点击其他按钮时也可以触发提交，不一定是submit按钮。
  ajaxForm执行的时候其实相当于
  $("form").submit(function(){
    $(this).ajaxSubmit();
    return false;        //此句解释了为什么ajaxSubmit会自动提交表单，想要阻止自动提交，必须return false；
})