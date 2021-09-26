
## 起本地服务
```js
node main
```

注意 script.js 文件，一个是访问本地的socket.io服务，另一个是访问基于serverless的服务
```
// 连接服务端socket.io服务地址，生成客户端的socket对象
// const socket = io.connect('https://service-r34gw9om-1302167662.gz.apigw.tencentcs.com', {
//   path: '/api/socket.io',
//   // transports: ['websocket'],
//   // "transports": ['websocket', 'polling'],
//   secure: true,
// })

// 本地测试
const socket = io.connect('http://localhost:9527', {
  path: '/api/socket.io',
  transports: ['websocket'],
  secure: true,
})
```