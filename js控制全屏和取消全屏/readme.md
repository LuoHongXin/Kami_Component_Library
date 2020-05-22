
## 启动全屏
``` js
// 启动全屏!
// launchFullScreen(document.documentElement); // 整个网页
// launchFullScreen(document.getElementById("videoElement")); // 某个页面元素
 function launchFullscreen(element) {
        if(element.requestFullscreen) {//谷歌或一般浏览器
            element.requestFullscreen();
        } else if(element.mozRequestFullScreen) {//火狐浏览器
            element.mozRequestFullScreen();
        } else if(element.webkitRequestFullscreen) {//谷歌、国内多数浏览器
            element.webkitRequestFullscreen();
        } else if(element.msExitFullscreen) {//IE浏览器
            element.msExitFullscreen();
        }
    }
```
## 退出全屏
``` js
function exitFullscreen() {
    var fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.webkitIsFullScreen || document.mozFullScreen;
    if(fullscreenElement){//全屏情况才有退出
        if(document.exitFullscreen) {//谷歌或一般浏览器
            document.exitFullscreen();
        } else if(document.mozCancelFullScreen) {//火狐浏览器
            document.mozCancelFullScreen();
        } else if(document.webkitExitFullscreen) {//谷歌、国内多数浏览器
            document.webkitExitFullscreen();
        } 
     }else if (document.msExitFullscreen) {//IE浏览器
        document.msExitFullscreen();
    }
}
``` 
## 监听全屏状态变化
``` js
document.addEventListener('fullscreenchange', Fn);
document.addEventListener('webkitfullscreenchange', Fn);
document.addEventListener('mozfullscreenchange', Fn);
document.addEventListener('msfullscreenchange', Fn);
function Fn() {
    var fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.webkitIsFullScreen || document.mozFullScreen;
    //全屏按钮切换类
    if (fullscreenElement) {//目前全屏
        console.log('目前全屏')
    }else {//目前不是全屏
        console.log('目前不是全屏')
    }
}
```
#### 作者：罗宏鑫  
#### 日期：2020-05-22