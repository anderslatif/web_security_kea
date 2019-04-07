const express = require("express");
const router = express.Router();

router.get("/users", (req, res) => {
    res.send("users");
});

router.get("/users/:id", (req, res) => {
    res.send("user: " + req.params.id);
});

module.exports = router;
