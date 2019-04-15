const nodemailer = require("nodemailer");

module.exports = {
  escapeMysqlInjections: () => {

  },
  escapeCrossSideScripting: () => {
        // todo recursive function
  },
  isValidEmail: () => {
    // todo implement
    return true;
  },
  logToFile: (log, file) => {
    const fs = require('fs');
    // backend-errors.txt
    // socket-errors.txt
    // intrusions.txt

    // email-log.txt
    // email-errors.txt

    fs.writeFile("~/../websrv/logs/" + file, log, function(err) {
      if(err) {
        return this.logToFile("Failed writing to log files: " + err, "backend-errors.txt");
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
        user: "bookshelfweb@gmail.com",
        pass: "WebSec2019"
      }
    });
    smtpTrans.sendMail(mailOptions, (error, res) => {
      if (error) {
        this.logToFile(mailOptions, "email-errors.txt");
        return false;
      }
      this.logToFile(mailOptions, "email-log.txt");
      return res;
    });
  }
};
