const express = require('express');

const router = express.Router();
const Post = require('../models/Post');
const helperFunctions = require('../helper-functions');
const mongoose = require('mongoose');

router.get('/posts', (req, res) => {
    if (req.session.userId) {
        Post.find().exec((error, foundPosts) => {
            if (error) {
                helperFunctions.logToFile(`MongoFailed${ error}`, 'mongo-errors.txt');
            }
            res.send(foundPosts);
        });
    } else {
        // fixme Someone is trying to use this route without knowing exactly what fields are required
        res.status(200).send();
    }
});

router.get('/posts/:userid', (req, res) => {
    if (req.params.userid) {
        Post.find({ bookOwner: req.params.userid }).exec((error, foundPosts) => {
            if (error) {
                helperFunctions.logToFile(`MongoFailed${ error}`, 'mongo-errors.txt');
            }
            res.send(foundPosts);
        });
    } else {
        // fixme Someone is trying to use this route without knowing exactly what fields are required
        res.status(200).send();
    }
});


router.post('/post', async (req, res) => {
    if (req.body.title && req.body.author && req.body.description) {
        // TODO sanitize input
        const { title, description, author, book, cover } = req.body;


        const post = new Post({
            title,
            description,
            author,
            bookOwner: req.session.userid,
            cover,
            book,
            reviews: []
        });

        post.save(error => {
            if (error) {
                helperFunctions.logToFile(`MongoFailed${ error}`, 'mongo-errors.txt');
            }
            // created post
            res.send({ result: post });
        });
    } else {
        res.send('Missing fields');
    }
});

router.put('/post/:id', (req, res) => {
    if (req.body) {
        Post.find({ _id: req.params.id }).exec((error, foundPosts) => {
            if (error) {
                helperFunctions.logToFile(`MongoFailed${ error}`, 'mongo-errors.txt');
            }
            if (foundPosts.length === 1) {
                const { title, description, author, file, cover } = req.body;
                const foundPost = foundPosts[0];
                foundPost.title = title;
                foundPost.description = description;
                foundPost.author = author;
                foundPost.file = file;
                foundPost.cover = cover;

                foundPost.save(error => {
                    if (error) {
                        helperFunctions.logToFile(`MongoFailed${ error}`, 'mongo-errors.txt');
                    }
                    res.status(200).send('OK');
                });
            } else if (foundPosts.length === 0) {
                helperFunctions.logToFile('Someone is trying to update a post without knowing the correct id', 'intrusions.txt');
            } else {
                helperFunctions.logToFile('There should never be multiple posts with the same id', 'backend-errors.txt');
            }
        });
    } else {
        helperFunctions.logToFile("Someone is trying to PUT a post and doesn't have the required fields", 'intrusions.txt');
        res.status(200).send();
    }
});

router.post('/review/:postId', (req, res) => {
    if (req.session.userId) {
        if (req.body.review) {
            Post.update({ _id: req.params.postId }, { $push: { reviews: { review: req.body.review } } }, (error, review) => {
                if (error) {
                    helperFunctions.logToFile(`MongoFailed${error}`, 'mongo-errors.txt');
                }
                res.send({ review });
            });
        } else {
            res.send('Missing the review');
        }
    } else {
        res.send('Not logged in');
    }
});

module.exports = router;
