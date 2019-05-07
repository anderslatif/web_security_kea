const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

module.exports = {
  escapeMysqlInjections: () => {

  },
  escapeCrossSideScripting: () => {
        // todo recursive function
  },
  escapeMongoDbInjections: () => {

  },
  isValidEmail: () => {
    // todo implement
    return true;
  },
  logToFile: (log, file) => {
    // backend-errors.txt
    // socket-errors.txt
    // intrusions.txt

    // email-log.txt
    // email-errors.txt
    fs.writeFile(path.join(__dirname, '..', '..', '..', file), log, (err) => {
      if (err) {
        console.log(err);
        // return logToFile("Failed writing to log files: " + err, "backend-errors.txt");
      }
    });
  },
  // https://github.com/vkarpov15/mongo-sanitize
  sanitizeMongo: (value) => {
    if (value instanceof Object) {
      for (const key in value) {
        if (/^\$/.test(key)) {
          delete value[key];
        }
      }
    }
    return value;
  },
  sendEmail: async (to, subject, html) => {
    const mailOptions = {
      from: '"Books boo 👻" <bookshelfweb@gmail.com>', // sender address
      to, // list of receivers, comma separated in a string
      subject,
      html
    };
    const smtpTrans = await nodemailer.createTransport({
      service: 'gmail',
      //  host:'smtp.gmail.com',
      //  port:465,
      // secure:true,
      auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASSWORD
      }
    });
    smtpTrans.sendMail(mailOptions, (error, res) => {
      if (error) {
        logToFile(mailOptions, 'email-errors.txt');
        return false;
      }
      logToFile(mailOptions, 'email-log.txt');
      return res;
    });
  }
};
