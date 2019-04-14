const express = require('express');
const app = express();
const multer  = require('multer');
const upload = multer({ dest: __dirname + '/uploads/' });
const helperFunctions = require("./helper-functions");

app.post('/cover', upload.single('cover'), (req, res, next) => {
    // req.file is the `cover` file
    // req.body will hold the text fields, if there were any
    res.send(req.file);
});

app.post('/book', upload.single('book'), (req, res, next) => {
    // req.file is the `book` file
    // req.body will hold the text fields, if there were any
    res.send(res.file);
});

app.listen(9090, error => {
    if (error) {
        helperFunctions.logToFile("Problem starting the server: ", "backend-errors.txt");
    }
});
