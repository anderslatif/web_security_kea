const express = require('express');
const app = express();
const cors = require("cors");

app.use(cors());
  
const fs = require('fs');
const tls = require('tls');;
const privateKey = fs.readFileSync('server.key').toString();
const certificate = fs.readFileSync('server.cert').toString();

require('dotenv').config();

const credentials = { key: privateKey, cert: certificate };

//const server = tls.createServer(credentials).listen(8080);
const server = require('http').createServer(app).listen(8080);

const io = require('socket.io')(server);

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// HTTP logging middleware
const morgan = require('morgan');
app.use(morgan('combined', ':remote-addr - :remote-user [:date] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"'));

// Rate limiting middleware
const rateLimit = require("express-rate-limit");

/*app.enable("trust proxy");

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 120, // limit each IP to 120 requests per windowMs
    message: 'You are doing it too much'
});
app.use(limiter); // all requests


const resetPasswordLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 4, // limit each IP to 4 requests per windowMs
    message: 'You are attempting to reset password way too often'
});
app.use("/reset-password", resetPasswordLimiter);
app.use("/update-reset-password", resetPasswordLimiter);*/

// FIXME This is stupid. We allow people access to the public folder by serving it as static content.
// FIXME I put a fake password file there - lol
app.use(express.static(__dirname + '/public'));

// todo since we can't use helmet we have to code our own implementation

const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/books', {useNewUrlParser: true});

const db = mongoose.connection;

//handle mongo error
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
});

app.use(session({
    secret: 'ThisIsMySecretHopeYouNeverGuessIt',
    resave: true,
    saveUninitialized: false,
    store: new MongoStore({
        mongooseConnection: db
    })
}));

const helperFunctions = require("./helper-functions");

// ----------------------- routes ----------------------


const postroute = require("./routes/postroute");
const registrationroute = require("./routes/registrationroute");
const resetpasswordroute = require("./routes/resetpasswordroute");
app.use(postroute);
app.use(registrationroute);
app.use(resetpasswordroute);

app.get("/", (req, res) => {
   res.send("Welcome to the awesome book api. Feel right at home exploring.")
});


io.on('connection', socket => {

    socket.on('receive-message', data => {
        // emits to all the sockets
        io.emit('send-message', data);

    });

    socket.on('error', error => {
        helperFunctions.logToFile("Someone has accessed the password file: " + error, "socket-errors.txt");
    });
});

