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
    fs.writeFile("~/../websrv/logs/" + file, log, function(err) {
      if(err) {
        return this("Failed writing to log files: " + err, "backend-errors.txt");
      }
    });
  }
};
