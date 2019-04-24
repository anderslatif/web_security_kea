const express = require('express');
const app = express();
const multer  = require('multer');
const upload = multer({ dest: __dirname + '/files/' });
const helperFunctions = require("./helper-functions");

const credentials = { key: privateKey, cert: certificate };

const server = tls.createServer(credentials).listen(8080);

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

app.listen(9090, error => {
    if (error) {
        helperFunctions.logToFile("Problem starting the file micro service server: ", "backend-errors.txt");
    }
});
