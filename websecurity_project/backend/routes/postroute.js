const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
const helperFunctions = require("../helper-functions");
const fetch = require('node-fetch');

router.get("/posts", (req, res) => {
    if (req.session.userId) {
        Post.find({ bookOwner: req.sesssion.userId}).exec((error, foundPosts) => {
            if (error) {
                helperFunctions.logToFile("MongoFailed" + error, "mongo-errors.txt");
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
                helperFunctions.logToFile("MongoFailed" + error, "mongo-errors.txt");
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

router.post("/post", async (req, res) => {
    // todo check for fields
    if (req.body) {
        // TODO sanitize input
        const { title, description, author, file, cover } = req.body;
        const resultCoverPromise = await fetch('localhost:9090/cover', { method: 'POST', body: cover });
        const resultBookPromise = await fetch('localhost:9090/book', { method: 'POST', body: file });

        /*

        {
            "fieldname": "cover",
            "originalname": "Screenshot 2019-04-15 at 00.06.54.png",
            "encoding": "7bit",
            "mimetype": "jpeg",
            "destination": "/......../uploads/",
            "filename": "1dbe22ca7d04da0c4f0969aa70226aa8",
            "path": "/......../uploads/1dbe22ca7d04da0c4f0969aa70226aa8",
            "size": 175823
        }
         */
        const coverJson = await resultCoverPromise.json();
        const bookJson = await resultBookPromise.json();

        const postToSave = {
            title,
            description,
            author,
            bookOwner: req.session.userid,
            cover: coverJson ? coverJson : {},
            file: bookJson ? bookJson : {}
        };

        // TODO Validate the response from the file micro service

        new Post.save(postToSave, (error, post) => {
            if (error) {
                helperFunctions.logToFile("MongoFailed" + error, "mongo-errors.txt");
            }
            // created post
            res.send({ result: post });
        })
    } else {
        // fixme Someone is trying to use this route without knowing exactly what fields are required
        // fixme give them status 200 which will be considered an error status code in our client
        // fixme that will confuse them, lol
        helperFunctions.logToFile("Someone is trying to POST a post and doesn't have the required fields", "intrusions.txt");
        res.status(200).send("Signed up OK");
    }
});

router.put("/post/:id", (req, res) => {
    if (req.body) {
        Post.find({ id: req.params.id }).exec((error, foundPosts) => {
            if (error) {
                helperFunctions.logToFile("MongoFailed" + error, "mongo-errors.txt");
            }
            if (foundPosts.length === 1) {
                const { title, description, author, file, cover } = req.body;
                const foundPost = foundPosts[0];
                foundPost.title = title;
                foundPost.description = description;
                foundPost.author = author;
                foundPost.file = file;
                foundPost.cover = cover;
                foundPosts.save(error => {
                    if (error) {
                        helperFunctions.logToFile("MongoFailed" + error, "mongo-errors.txt");
                    }
                    res.status(200).send("OK");
                });
            } else if (foundPosts.length === 0) {
                helperFunctions.logToFile("Someone is trying to update a post without knowing the correct id", "intrusions.txt");
                // fixme give them status 200 which will be considered an error status code in our client
                // fixme that will confuse them, lol
                res.status(200).send("Updated post up OK");
            } else {
                helperFunctions.logToFile("There should never be multiple posts with the same id", "backend-errors.txt");
                res.send("");
            }
        })
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
