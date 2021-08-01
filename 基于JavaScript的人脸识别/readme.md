## JavaScript实现人脸识别
### 安装依赖
```
npm install
```

### 启动项目
```
npm start
```

### 操作
- labeled_images 文件夹存放的是人物完整的脸部照片，用于确定每个人物的脸部特征
- 打开 http://localhost:1949/ ，等待页面出现 "模型加载完成" 字样，上传照片即可，faceapi 就会根据 labeled_images 中的人物图片，匹配其中的某个人物。
- 新增人物，可以在 labeled_images 以人物名字命名文件夹，然后放两张人物清晰的脸部图片（注意，上传的照片脸部尽量完整，否则可能无法识别。），再在 script.js 的 loadLabeledImages 函数中的 labels 变量，添加人物的文件夹名即可新增人物。




### 资源
- <a href="https://github.com/justadudewhohacks/face-api.js/">face-api.js</a> Face-api.js 是一个 JavaScript API，是基于 tensorflow.js 核心 API 的人脸检测和人脸识别的浏览器实现。它实现了一系列的卷积神经网络（CNN），针对网络和移动设备进行了优化。

### 人脸识别步骤
<ol>
<li>
加载model <a href="https://github.com/justadudewhohacks/face-api.js/tree/master/weights ">（模型）</a>
</li>
<li>
面部检测
</li>
<li>
检测脸部68个标记点
</li>
<li>
计算脸部描述（必须在检测之后，才能执行这步）
</li>
<li>
计算两张脸相似度
</li>
</ol>

##### 计算两张脸相似度
此处主要通过脸部特征向量来计算euclidean distance(欧氏距离)，因此如预览图所示_distance越小，说明两张脸越匹配，这个阈值可以设置为0.6，0.6以下为匹配成功，以上则失败。如果你有脸部特层向量， 你也可以通过这个face-api.js api来计算欧式距离：
```
const dist = faceapi.euclideanDistance([0, 0], [0, 10])
console.log(dist) // 10
```
euclidean distance(欧氏距离)定义：是一个通常采用的距离定义，它是在m维空间中两个点之间的真实距离.在二维空间中的欧氏距离就是两点之间的直线段距离. 二维空间的欧氏距离公式 d = sqrt(( x1-x2)^2 + (y1-y2)^2 )三维空间的欧氏距离公式d = sqrt( (x1-x2)^2+(y1-y2)^2+(z1-z2)^2 )