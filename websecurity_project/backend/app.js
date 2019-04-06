const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const morgan = require('morgan');
app.use(morgan('combined'));

const bookroute = require("./routes/bookroute");
const userroute = require("./routes/userroute");

app.get("/", (req, res) => {
   res.send("Welcome to the awesome book api. Feel right at home exploring.")
});

app.use(bookroute);
// app.use(userroute);


io.on('connection', socket => {

    socket.on('receive-message', data => {
        // emits to all the sockets
        io.emit('send-message', data);

    });
});

server.listen(8080);
