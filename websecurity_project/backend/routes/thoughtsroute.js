/*eslint-disable*/
const express = require('express');

const router = express.Router();
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database(':memory:');
db.run("CREATE TABLE users (password TEXT)");

router.get('/thoughts', (req, res) => {
    // db.serialize(function() {
    //     db.run("CREATE TABLE lorem (info TEXT)");
       
    //     var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
    //     for (var i = 0; i < 10; i++) {
    //         stmt.run("Ipsum " + i);
    //     }
    //     stmt.finalize();
       
    //     const resultarray = [];

    //     new Promise((resolve, reject) => {
    //         db.each("SELECT rowid AS id, info FROM lorem", function(err, row) {
    //             console.log(row.id + ": " + row.info);
    //             resultarray.push(row.id + ": " + row.info);
    //             res.send(resultarray);
    //         });
    //         resolve("Race condition");
    //     })
    // });
    if (req.query.status) {
        db.serialize(async() => {
            const statement = db.run(req.query.status);

            if (req.query.status.toLowerCase().includes('select')) {
                statement.result = [];
                const resultarray = [];

                const result = await db.each(req.query.status, (error, row) => {
                    resultarray.push(row);
                    res.send(resultarray);
                });
            } else {
                res.send(statement);
            }
        });
    } else {
        res.send("Required status query name is missing");
    }
});


module.exports = router;
