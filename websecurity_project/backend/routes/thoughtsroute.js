/*eslint-disable*/
const express = require('express');

const router = express.Router();
// const sqlite3 = require('sqlite3').verbose();

// const db = new sqlite3.Database(':memory:');

router.post('/thoughts', (req, res) => {
    if (req.query.status) {
        db.serialize(() => {
            const statement = db.run(req.query.status);

            if (req.query.status.toLowerCase().includes('select')) {
                statement.result = [];
                db.each(req.query.status, (error, row) => {
                    statement.push(`${row.id }: ${ row.info}`);
                });
            }
            res.send(statement);
        });
    }
    res.send();
});


module.exports = router;
