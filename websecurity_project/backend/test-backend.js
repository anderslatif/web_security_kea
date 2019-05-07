const express = require('express');

const app = express();

app.get('/', (req, res) => {
   console.log('Are we even reaching here???');
   res.send('OK');
});

app.listen(8090);
