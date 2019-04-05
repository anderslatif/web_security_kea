const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
io.on('connection', socket => {
    socket.on('receive-message', data => {
        console.log("server data ", data);
        // emits to all the sockets
        io.emit("send-message", data);
    })
});
server.listen(8080);
