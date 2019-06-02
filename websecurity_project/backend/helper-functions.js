/*eslint-disable*/
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

module.exports = {
  escapeMysqlInjections: (value) => {
    return value.replace(/[\0\n\r\b\t\\'"\x1a]/g, (s) => {
      switch (s) {
        case '\0':
          return '\\0';
        case '\n':
          return '\\n';
        case '\r':
          return '\\r';
        case '\b':
          return '\\b';
        case '\t':
          return '\\t';
        case '\x1a':
          return '\\Z';
        case "'":
          return "''";
        case '"':
          return '""';
        default:
          return `\\${ s}`;
      }
    });
  },
  escapeCrossSideScripting: () => {
        // todo recursive function
  },
  escapeMongoDbInjections: (value) => {
    if (value instanceof Object) {
      for (const key in value) {
        if (/^\$/.test(key)) {
          delete value[key];
        }
      }
    }
    return value;
  },
  isValidEmail: (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  },
  logToFile: (log, file) => {
    // backend-errors.txt
    // socket-errors.txt
    // intrusions.txt

    // email-log.txt
    // email-errors.txt
    fs.writeFile(path.join(__dirname, '..', '..', '..', 'logs', file), log, (err) => {
      if (err) {
        console.log(err);
        // return logToFile("Failed writing to log files: " + err, "backend-errors.txt");
      }
    });
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
