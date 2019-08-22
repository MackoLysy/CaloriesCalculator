const db = require('../db/sqlite');

class IRepository {

    _run(sql) {
        db.run(sql).then((r) => {
        }, (e) => {
            console.log(e);
        });
    }
    async _getAll(sql, params) {
        return await db.all(sql, params);
    }
    async _insert(sql, params) {
        var item = await db.run(sql,params);
        console.log("item: ");
        console.log(item);
        return item;
    }
}

module.exports = IRepository;
