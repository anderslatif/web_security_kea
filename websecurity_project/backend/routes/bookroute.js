const express = require("express");
const router = express.Router();

router.get("/books", (req, res) => {
    res.send("books");
});

router.get("/book/:id", (req, res) => {
    res.send("book: " + req.params.id);
});

module.exports = router;
