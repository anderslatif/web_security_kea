// call it like this: node bruteforcer.js password
const crypto = require('crypto');
const secret = 'abcdefg';
/*const myHash = crypto.createHmac('sha256', secret)
                   .update('123')
                   .digest('hex');*/

const myHash = "a4f8d1682b29eb57cc0a4846b03630731673b2c49bd3d7eb418a1ab1908f6db3";

exports.validate = (theirPassword) => {
    const theirHash = crypto.createHmac('sha256', secret).update(theirPassword).digest('hex');

    if (myHash == theirHash) {
        return true;
    }
}


