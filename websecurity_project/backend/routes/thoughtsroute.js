const express = require('express');

const router = express.Router();
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database(':memory:');

router.get('/thoughts', (req, res) => {
    if (req.body.status) {
        db.serialize(() => {
            const statement = db.run(req.body.status);

            if (req.body.command.toLowerCase().includes('select')) {
                statement.result = [];
                db.each(req.body.status, (error, row) => {
                    statement.push(`${row.id }: ${ row.info}`);
                });
            }
            res.send(statement);
        });
    }
    res.send();
});


module.exports = router;
