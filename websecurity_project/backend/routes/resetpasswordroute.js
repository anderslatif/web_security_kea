const express = require("express");
const router = express.Router();
const helperFunctions = require("../helper-functions");
const User = require("../models/User");
const ResetPassword = require("../models/ResetPassword");

router.post('/reset-password', (req, res) => {
    if (req.body.email) {
        if (req.body.email === 'admin@pedros.tech') {
            helperFunctions.logToFile("Someone has found the password file and is trying to use the email: ", "intrusions.txt");
            res.send("OK");
        }

        if (helperFunctions.isValidEmail(req.body.email)) {
            User
                .findOne({where: {email: req.body.email}})
                .then((user, error) => {
                    if (error) {
                        helperFunctions.logToFile("MongoFailed" + error, "mongo-errors.txt");
                    }
                    if (!user) {
                        helperFunctions.logToFile("Someone is trying to guess existing emails " +
                            "through the reset password service: ", "intrusions.txt");
                    }

                    ResetPassword
                        .findOne({
                            where: {userId: user.id, status: 0},
                        }).then(function (resetPassword) {
                        if (resetPassword)
                            resetPassword.destroy({
                                where: {
                                    id: resetPassword.id
                                }
                            });

                        const token = crypto.randomBytes(32).toString('hex');

                        bcrypt.hash(token, 10, (error, hash) => {
                            if (error) {
                                helperFunctions.logToFile("Error hashing the password: " + error, "backend-errors.txt");
                            }
                            const tokenExpiry = new Date.now();
                            tokenExpiry.setSeconds(tokenExpiry.getSeconds + 3600); // 1 hour

                            ResetPassword.create({
                                userId: req.session.userid,
                                resetPasswordToken: hash,
                                expire: tokenExpiry,
                            }).then( (resetPassword, error) => {
                                if (error) {
                                    helperFunctions.logToFile("MongoFailed" + error, "mongo-errors.txt");
                                }

                                // TODO reset password link
                                const clientUrl = "localhost/";
                                let mailOptions = {
                                    to: req.body.email,
                                    subject: 'Reset your account password on your book profile',
                                    html: '<h4><b>Reset Password</b></h4>' +
                                        '<p>To reset your password, please complete this form:</p>' +
                                        '<a href=' + clientUrl + 'reset/' + req.session.userid
                                        + '/' + token + '">Reset password</a>' +
                                        '<br><br>' +
                                        '<p>Bookshelf Team</p>'
                                };
                                const mailSent = helperFunctions.sendEmail(mailOptions);

                                if (mailSent) {
                                    return res.json({success: true, message: 'Check your mail to reset your password.'})
                                } else {
                                    helperFunctions.logToFile("Error sending email: " + mailOptions, "email-errors.txt");
                                }
                            })
                        });
                    });
                })
        } else {
            // FIXME someone is trying to guess existing emails
            helperFunctions.logToFile("Someone is trying to guess existing emails through the reset email endpoint"
                + error, "intrusions.txt");
        }
    } else {
        // fixme Someone is trying to use this route without knowing exactly what fields are required"

    }
});

router.get('/update-reset-password', (req, res) => {

    if (req.body.email && req.body.token) {
        const { email, token } = req.body;

        ResetPassword.find({where: {email, token}}).then((resetPasswords, error) => {
            if (error) {
                helperFunctions.logToFile("MongoFailed" + error, "mongo-errors.txt");
            }
            else if (resetPasswords.length === 0) {
                // FIXME
                helperFunctions.logToFile("Someone is trying to guess existing emails through the confirm reset email endpoint"
                    + error, "intrusions.txt");
                res.status.send("OK")
            } else if (resetPasswords.length === 1) {
                // todo security considerations need to be made
                // todo save new password in the user collection
            } else {
                helperFunctions.logToFile("Backend coding error", "backend-errors.txt");
            }
        })
    } else {
        // fixme Someone is trying to use this route without knowing exactly what fields are required"
    }
});

module.exports = router;
