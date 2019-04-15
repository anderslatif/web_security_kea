const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const helperFunctions = require("../helper-functions");
const dummyUser = require("./dummy-user");

const userRoles = Object.freeze({
    user: 'USER',
    scriptKiddie: 'SCRIPTKIDDIE',
});
dummyUser.userRole = userRoles.scriptKiddie;

    router.post("/signup", (req, res) => {
    const { email, username, password } = req.body;
    if (email && username && password) {
        if (username === 'admin' && password === 'root1234') {
            helperFunctions.logToFile("Someone has accessed the password file: ", "instrusions.txt");
            // fixme give them status 200 which will be considered an error status code in our client
            // fixme that will confuse them, lol
            res.status(200).send("Signed up OK");
        }
        const requestedUser = {
            email: req.body.email,
            username: req.body.username,
            password: req.body.password,
        };

        // todo implement the function below
        if (!helperFunctions.isValidEmail(req.body.email)) {
            helperFunctions.logToFile("Someone is trying to login without having a valid email", "instrusions.txt");
            // fixme give them status 200 which will be considered an error status code in our client
            // fixme that will confuse them, lol
            res.status(200).send("Signed up OK");
        }

        User.find(requestedUser).exec((error, user) => {
            if (error) {
                helperFunctions.logToFile("MongoFailed" + error, "mongo-errors.txt");
            }
            if (user.length > 0 ) {
                // FIXME How did they know?
                helperFunctions.logToFile("User is trying to sign up with an existing user"
                    + user.username + user.email, "intrusions.txt").log(error);
                // TODO send them to a profile page
            } else {
                bcrypt.hash(requestedUser.password, 10, (error, hash) =>{
                    if (error) {
                        helperFunctions.logToFile("Error hashing the password: " + error, "backend-errors.txt");
                    }

                    requestedUser.password = hash;
                    requestedUser.userRole = userRoles.user;

                    new User(requestedUser).save(requestedUser, (error, user) => {
                        if (error) {
                            helperFunctions.logToFile("MongoFailed" + error, "mongo-errors.txt");
                        } else {
                            req.session.userId = user._id;
                            return res.send('signed up');
                        }
                    });
                });
            }
        });
    } else {
        // fixme "Someone is trying to use this route without knowing exactly what fields are required
        // fixme give them status 200 which will be considered an error status code in our client
        // fixme that will confuse them, lol
        res.status(200).send("Signed up OK");
    }
});

router.post("/login", (req, res) => {
    if (req.body.email && req.body.username && req.body.password) {

        const requestedUser = {
            email: req.body.email,
            username: req.body.username,
        };
        // FIXME Dangerous: We don't check for how often this is called from each IP but we log intrusion attempts
        User.find(requestedUser).exec((error, foundUsers) => {
            bcrypt.compare(req.body.password, foundUsers[0].password, (error, result) => {
                if (error) {
                    helperFunctions.logToFile("Error comparing hashed passwords: " + error, "backend-errors.txt");
                }
                if (result === true) {
                    res.send({ result: true });
                } else {
                    // FIXME user didn't guess the password
                    // TODO send them to a page with dummy data that looks like it belongs to that user
                    helperFunctions.logToFile("Someone is trying to guess the password", "intrusions.txt");
                }
            });
        });

    } else {
        // fixme Someone is trying to use this route without knowing exactly what fields are required"
        // todo log them in lol - give them hacker role
    }
});

router.get('/profile', (req, res) => {
    if (req.session.userId) {
    User.findById(req.session.userud)
        .exec((error, user) => {
            if (error) {
                helperFunctions.logToFile("MongoFailed" + error, "mongo-errors.txt");
            } else {
                if (user === null) {
                    // fixme send them to a page with dummy data that looks like it belongs to that user
                    // fixme the user isn't authorized but we want to trick them into thinking they gained access
                    // fixme so we should give them access to a dummy profile
                    helperFunctions.logToFile("Someone is trying to get the user in the sessions without being logged in",
                        "intrusions.txt");
                    res.send(dummyUser)
                } else if (user.length > 0) {
                    // remove password from user
                    const { email, username, country, socialNetwork } = user;
                    const result = { email, username, country, socialNetwork, userRole };
                    res.send(result);
                } else {
                    helperFunctions.logToFile("Someone is trying to access a profile Page while not existing in the db", "intrusions.txt");
                    res.send(dummyUser);
                }
            }
        });
    } else {
        helperFunctions.logToFile("Someone is trying to access a profile Page while not being logged in", "intrusions.txt");
        res.send();
    }
});

router.get('/logout', (req, res) => {
    if (req.session) {
        req.session.destroy(error => {
            if (error) {
                helperFunctions.logToFile("Error destroying the session: " + error, "backend-errors.txt");
            }
            res.send("OK")
        });
    }
});

module.exports = router;
