/*eslint-disable*/
const express = require('express');

const app = express();
const multer = require('multer');

const upload = multer({ dest: `${__dirname }/files/` });
const helperFunctions = require('./helper-functions');
const tls = require('tls');
const fs = require('fs');
const cors = require('cors');
app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
s});

const privateKey = fs.readFileSync('server.key').toString();
const certificate = fs.readFileSync('server.cert').toString();
const credentials = { key: privateKey, cert: certificate };

app.post('/file', upload.single('file'), (req, res) => {
    try {
        // req.file is the `book` file
        // req.body will hold the text fields, if there were any
        res.send(req.file.path);
    } catch (e) {
        helperFunctions.logToFile('Problem in the /book file micro service: ', 'backend-errors.txt');
        helperFunctions.logToFile('', 'backend-errors.txt');
        res.send('error');
    }
});

/* const server = tls.createServer(credentials).listen(9090, error => {
    if (error) {
        helperFunctions.logToFile('Problem starting the file micro service server: ', 'backend-errors.txt');
    }
}); */
app.listen(9090, error => {
    if (error) {
        helperFunctions.logToFile('Problem starting the file micro service server: ', 'backend-errors.txt');
    }
});
