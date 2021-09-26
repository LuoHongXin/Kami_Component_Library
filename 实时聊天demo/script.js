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

// 容器
const messageContainer = document.getElementById('message-container')
// 表单
const messageForm = document.getElementById('send-container')
// 输入框
const messageInput = document.getElementById('message-input')

const name = prompt('小朋友，怎么称呼?')
// if (!name) {
//   alert("孩纸，不输入您的大名，无法加入群聊！");
//   location.reload()
//   return;
// }
appendMessage(name + '加入了群聊')

// 推送新用户信息
socket.emit('new-user', name)

// 接受聊天信息
socket.on('chat-message', data => {
  appendMessage(`${data.name}: ${data.message}`)
})

// 接收加入用户
socket.on('user-connected', name => {
  appendMessage(`${name} 加入了群聊`)
})

// 接收离开用户
socket.on('user-disconnected', name => {
  appendMessage(`${name} 离开了`)
})

// 表单提交
messageForm.addEventListener('submit', e => {
  e.preventDefault()
  const message = messageInput.value
  appendMessage(`你: ${message}`)
  socket.emit('send-chat-message', message)
  messageInput.value = ''
})

// 插入的信息
function appendMessage(message) {
  const messageElement = document.createElement('div')
  messageElement.innerText = message
  messageContainer.append(messageElement)
}