const express = require('express');

const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const helperFunctions = require('../helper-functions');
const dummyUser = require('./dummy-user');

const userRoles = Object.freeze({
    user: 'USER',
    scriptKiddie: 'SCRIPTKIDDIE',
});
dummyUser.userRole = userRoles.scriptKiddie;

    router.post('/signup', (req, res) => {
    const { email, password } = req.body;
    if (email && password) {
        if (password === 'root1234') {
            helperFunctions.logToFile('Someone has accessed the password file: ', 'instrusions.txt');
            res.status(200).send();
        }
        const requestedUser = {
            email: req.body.email,
            password: req.body.password
        };

        // todo implement the function below
        if (!helperFunctions.isValidEmail(req.body.email)) {
            helperFunctions.logToFile('Someone is trying to login without having a valid email', 'instrusions.txt');
        } else {
            User.find({ email: requestedUser.email }).exec((error, user) => {
                if (error) {
                    helperFunctions.logToFile(`MongoFailed${ error}`, 'mongo-errors.txt');
                }
                if (user.length > 0) {
                    helperFunctions.logToFile(`User is trying to sign up with an existing user: ${user.email}`, 'intrusions.txt');
                    res.send('User already exists');
                } else {
                    bcrypt.hash(requestedUser.password, 10, (error, hash) => {
                        if (error) {
                            helperFunctions.logToFile(`Error hashing the password: ${ error}`, 'backend-errors.txt');
                        }

                        requestedUser.password = hash;
                        requestedUser.userRole = userRoles.user;

                        new User(requestedUser).save(error => {
                            if (error) {
                                helperFunctions.logToFile(`MongoFailed${ error}`, 'mongo-errors.txt');
                            } else {
                                req.session.userId = user._id;
                                res.send('signed up');
                            }
                        });
                    });
                }
            });
        }
    } else {
        // "Someone is trying to use this route without knowing exactly what fields are required
        res.status(200).send();
    }
});

router.post('/login', (req, res) => {
    if (req.body.email && req.body.password) {
        const requestedUser = {
            email: req.body.email,
            // password: req.body.password,
        };

        User.find(requestedUser).exec((error, foundUsers) => {
            bcrypt.compare(req.body.password, foundUsers[0].password, (error, result) => {
                if (error) {
                    helperFunctions.logToFile(`Error comparing hashed passwords: ${ error}`, 'backend-errors.txt');
                }
                if (result === true) {
                    req.session.userId = foundUsers[0]._id;
                    res.send({ result: true });
                } else {
                    helperFunctions.logToFile('Someone is trying to guess the password', 'intrusions.txt');
                }
            });
        });
    } else {
        // "Someone is trying to use this route without knowing exactly what fields are required
        res.status(200).send();
    }
});

router.get('/profile', (req, res) => {
    if (req.session.userId) {
        User.findById(req.session.userId)
        .exec((error, user) => {
            if (error) {
                helperFunctions.logToFile(`MongoFailed${ error}`, 'mongo-errors.txt');
            } else if (user === null) {
                    helperFunctions.logToFile('Someone is trying to get the user in the sessions without being logged in',
                        'intrusions.txt');

                // fixme send them to a page with dummy data that looks like it belongs to that user
                // fixme the user isn't authorized but we want to trick them into thinking they gained access
                    res.send(dummyUser);
                } else if (user) {
                    // remove password from user
                    const { email, country, socialNetwork } = user;
                    const userRole = userRoles.user;
                    const result = { email, country, socialNetwork, userRole };
                    res.send(result);
                } else {
                    helperFunctions.logToFile('Someone is trying to access a profile Page while not existing in the db', 'intrusions.txt');
                    res.send(dummyUser);
                }
        });
    } else {
        helperFunctions.logToFile('Someone is trying to access a profile Page while not being logged in', 'intrusions.txt');
        res.send('You are not logged in');
    }
});

router.get('/logout', (req, res) => {
    if (req.session) {
        req.session.destroy(error => {
            if (error) {
                helperFunctions.logToFile(`Error destroying the session: ${ error}`, 'backend-errors.txt');
            }
            res.status(200).send('OK');
        });
    }
});

module.exports = router;
