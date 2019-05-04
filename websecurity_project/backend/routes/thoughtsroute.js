const express = require('express');

const router = express.Router();
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database(':memory:');

router.get('/thoughts', (req, res) => {
    if (req.body.command) {
        db.serialize(() => {
            const statement = db.run(req.body.command);

            if (req.body.command.toLowerCase().includes('select')) {
                statement.result = [];
                db.each(req.body.command, (error, row) => {
                    statement.push(`${row.id }: ${ row.info}`);
                });
            }
            res.send(statement);
        });
    }
    res.send();
});


module.exports = router;
