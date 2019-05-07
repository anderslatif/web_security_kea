const express = require('express');

const router = express.Router();
const helperFunctions = require('../helper-functions');
const User = require('../models/User');
const ResetPassword = require('../models/ResetPassword');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');

router.post('/reset-password', (req, res) => {
    if (req.body.email) {
        if (req.body.email === 'admin@pedros.tech') {
            helperFunctions.logToFile('Someone has found the password file and is trying to use the email: ', 'intrusions.txt');
            res.send('OK');
        }

        // todo implement the function below
        if (helperFunctions.isValidEmail(req.body.email)) {
            User.findOne({ email: req.body.email })
                .then((user, error) => {
                    if (error) {
                        helperFunctions.logToFile(`MongoFailed${ error}`, 'mongo-errors.txt');
                    }
                    if (!user) {
                        helperFunctions.logToFile('Someone is trying to guess existing emails ' +
                            'through the reset password service: ', 'intrusions.txt');
                        res.send('');
                    }

                    ResetPassword.findOne({
                        userId: user.id
                    }).then((resetPassword) => {
                        const token = crypto.randomBytes(32).toString('hex');

                        bcrypt.hash(token, 10, (error, hash) => {
                            if (error) {
                                helperFunctions.logToFile(`Error hashing the password: ${ error}`, 'backend-errors.txt');
                            }
                            const tokenExpiry = new Date();
                            tokenExpiry.setSeconds(tokenExpiry.getSeconds() + 900); // 15 min


                            ResetPassword.create({
                                userId: user._id,
                                resetPasswordToken: hash,
                                expire: tokenExpiry,
                            }).then((resetPassword, error) => {

                                if (error) {
                                    helperFunctions.logToFile(`MongoFailed${ error}`, 'mongo-errors.txt');
                                }

                                // TODO reset password link
                                const clientUrl = 'localhost/';

                                const to = req.body.email;
                                const subject = 'Reset your account password on your book profile';
                                const html = `${'<h4><b>Reset Password</b></h4>' +
                                        '<p>To reset your password, please complete this form:</p>' +
                                        '<a href='}${ clientUrl }reset/${ req.session.userid
                                         }/${ token }">Reset password</a>` +
                                        '<br><br>' +
                                        '<p>Bookshelf Team</p>';
                                const mailSent = helperFunctions.sendEmail(to, subject, html);

                                if (mailSent) {
                                    return res.json({ success: true, message: 'Check your mail to reset your password.' });
                                }
                                    helperFunctions.logToFile(`Error sending email: ${ mailOptions}`, 'email-errors.txt');
                            });
                        });
                    });
                });
        } else {
            // FIXME someone is trying to guess existing emails
            helperFunctions.logToFile(`Someone is trying to guess existing emails through the reset email endpoint${
                 error}`, 'intrusions.txt');
            res.send();
        }
    } else {
        // fixme Someone is trying to use this route without knowing exactly what fields are required"
        res.send();
    }
});

router.get('/update-reset-password', (req, res) => {
    if (req.body.email && req.body.token) {
        const { email, token } = req.body;

        ResetPassword.find({ where: { email, token } }).then((resetPasswords, error) => {
            if (error) {
                helperFunctions.logToFile(`MongoFailed${ error}`, 'mongo-errors.txt');
            } else if (resetPasswords.length === 0) {
                // FIXME
                helperFunctions.logToFile(`Someone is trying to guess existing emails through the confirm reset email endpoint${
                     error}`, 'intrusions.txt');
                res.status.send('OK');
            } else if (resetPasswords.length === 1) {
                // todo security considerations need to be made
                // todo save new password in the user collection
            } else {
                helperFunctions.logToFile('Backend coding error', 'backend-errors.txt');
            }
        });
    } else {
        // fixme Someone is trying to use this route without knowing exactly what fields are required"
    }
});

module.exports = router;
