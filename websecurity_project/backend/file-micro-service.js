const express = require('express');
const app = express();
const multer  = require('multer');
const upload = multer({ dest: __dirname + '/files/' });
const helperFunctions = require("./helper-functions");

const tls = require('tls');;
const fs = require('fs');
const privateKey = fs.readFileSync('server.key').toString();
const certificate = fs.readFileSync('server.cert').toString();
const credentials = { key: privateKey, cert: certificate };

app.post('/cover', upload.single('cover'), (req, res) => {
    try {
        // req.file is the `cover` file
        // req.body will hold the text fields, if there were any
        res.send(req.file);
    } catch (e) {
        helperFunctions.logToFile("Problem in the /cover file micro service: ", "backend-errors.txt");
        helperFunctions.logToFile("", "backend-errors.txt");
    }

});

app.post('/book', upload.single('book'), (req, res) => {
    try {
        // req.file is the `book` file
        // req.body will hold the text fields, if there were any
        res.send(res.file);
    } catch (e) {
        helperFunctions.logToFile("Problem in the /book file micro service: ", "backend-errors.txt");
        helperFunctions.logToFile("", "backend-errors.txt");
    }

});

const server = tls.createServer(credentials).listen(9090, error => {
    if (error) {
        helperFunctions.logToFile("Problem starting the file micro service server: ", "backend-errors.txt");
    }
});
