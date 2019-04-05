// call it like this: node generator.js password
const crypto = require('crypto');

const secret = 'abcdefg';
const password = process.argv[2];

const generatedHash = crypto.createHmac('sha256', secret).update(password).digest('hex');

console.log("generated hash below from password: ", password);
console.log(generatedHash);
