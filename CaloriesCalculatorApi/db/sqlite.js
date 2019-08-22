var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('dev.db');


db.on('error', function (err) {
    console.log(err);
});

function runSql(sql, params = []) {
    return new Promise((resolve, reject) => {
        db.run(sql, params, function (err) {
            if (err) {
                reject(err);
            }
            resolve({id: this.lastID});
        });
    });
}

function get(sql, params = []) {
    return new Promise((resolve, reject) => {
        db.get(sql, params, (err, row) => {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                resolve(row);
            }
        })
    });
}

function all(sql, params = []) {
    return new Promise((resolve, reject) => {
        db.all(sql, params, (err, rows) => {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                resolve(rows)
            }
        })
    });
}

function asdadsdad() {

}
module.exports = {
    run: runSql,
    get: get,
    all: all,
}