const express = require("express");
const port = 9527;
const app = express();
const http = require('http')
const proxy = require('http-proxy-middleware');

var httpServer = require('http').createServer(app);

// httpServer.get("/ip1", (req, res) => {
//     res.sendFile(path.join(__dirname, 'index.html'));
// })
httpServer.listen(3000, {
    path: '/api/socket.io'
})
const io = require('socket.io')(httpServer)
app.use(express.static("./"))


const path = require('path');
app.get(`/`, (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// 代理服务器的socketio服务
app.use('/api', proxy.createProxyMiddleware({
    target: 'http://localhost:3000',
    // changeOrigin: true,
    ws: true,
    pathRewrite: {
        "^/api": "" // 同上
    }
}));
// app.get(`/socket.io/socket.io.js`, (req, res) => {
//     http.get("http://localhost:3000/socket.io/socket.io.js", function (data) {
//         var str = "";
//         data.on("data", function (chunk) {
//             str += chunk; //监听数据响应，拼接数据片段
//         })
//         data.on("end", function () {
//             res.send({
//                 myip: str.toString(),
//             });
//         })
//     })

// });
app.listen(port, () => {
    console.log(port, "running")
})
const users = {}

io.on('connection', socket => {
    socket.on('new-user', name => {
        users[socket.id] = name
        socket.broadcast.emit('user-connected', name)
    })
    socket.on('send-chat-message', message => {
        socket.broadcast.emit('chat-message', {
            message: message,
            name: users[socket.id]
        })
    })
    socket.on('disconnect', () => {
        socket.broadcast.emit('user-disconnected', users[socket.id])
        delete users[socket.id]
    })
})
module.exports = app;