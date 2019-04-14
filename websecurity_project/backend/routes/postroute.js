const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
const helperFunctions = require("../helper-functions");


router.get("/posts", (req, res) => {
    if (req.session.userId) {
        Post.find({ bookOwner: req.sesssion.userId}).exec((error, foundPosts) => {
            if (error) {
                helperFunctions.logToFile("MongoFailed" + error, "backend-errors.txt");
            }
            if (foundPosts.length === 0) {
                // fixme this user either looked up a user with no posts
                // fixme or is guessing ids without knowing any
                helperFunctions.logToFile("Someone might be trying to guess user ids to access posts" + error, "intrusions.txt");
            }
        });
        res.send({ post: foundPosts });
    } else {
        // fixme Someone is trying to use this route without knowing exactly what fields are required
        // fixme give them status 200 which will be considered an error status code in our client
        // fixme that will confuse them, lol
        helperFunctions.logToFile("Someone is trying to get posts without defining an id" + error, "intrusions.txt");
        res.status(200).send("Signed up OK");
    }
});

router.get("/posts/:userid", (req, res) => {
    if (req.params.userid) {
        Post.find({ bookOwner: req.params.userid}).exec((error, foundPosts) => {
            if (error) {
                helperFunctions.logToFile("MongoFailed" + error, "backend-errors.txt");
            }
            if (foundPosts.length === 0) {
                // fixme this user either looked up a user with no posts
                // fixme or is guessing ids without knowing any
                helperFunctions.logToFile("Someone might be trying to guess user ids to access posts" + error, "intrusions.txt");
            }
        });
        res.send({ post: foundPosts });
    } else {
        // fixme Someone is trying to use this route without knowing exactly what fields are required
        // fixme give them status 200 which will be considered an error status code in our client
        // fixme that will confuse them, lol
        helperFunctions.logToFile("Someone is trying to get posts without defining an id" + error, "intrusions.txt");
        res.status(200).send("Signed up OK");
    }
});

router.post("/post", (req, res) => {
    // todo check for fields
    if (req.body) {
        // TODO sanitize input
        const { title, description, author } = req.body;
        const postToSave = {
            title,
            description,
            author,
            bookOwner: req.session.userid
        };

        // todo write microservice with multer to save file and cover
        new Post.save(postToSave, (error, post) => {
            if (error) {
                helperFunctions.logToFile("MongoFailed" + error, "backend-errors.txt");
            }
            res.send("Created Post");
        })
    } else {
        // fixme Someone is trying to use this route without knowing exactly what fields are required");
        // fixme give them status 200 which will be considered an error status code in our client
        // fixme that will confuse them, lol
        helperFunctions.logToFile("Someone is trying to POST a post and doesn't have the required fields" + error, "intrusions.txt");
        res.status(200).send("Signed up OK");
    }
});

router.put("/post", (req, res) => {
    // todo check for fields
    if (req.body) {
      // todo allow update an existing post?
    } else {
        // fixme Someone is trying to use this route without knowing exactly what fields are required");
        // fixme give them status 200 which will be considered an error status code in our client
        // fixme that will confuse them, lol
        helperFunctions.logToFile("Someone is trying to POST a post and doesn't have the required fields" + error, "intrusions.txt");
        res.status(200).send("Signed up OK");
    }
});

module.exports = router;
