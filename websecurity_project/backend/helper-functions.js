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
    const info = await transporter.sendMail({
      // TODO proper email address
      from: '"Books boo 👻" <bookshelfweb@gmail.com>', // sender address
      to, // list of receivers, comma separated in a string
      subject,
      html
    });
    this.logToFile(info, "email-log.txt");
    return info;
  }
};
