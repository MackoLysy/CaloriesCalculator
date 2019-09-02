const db = require('../db/Sqlite');

class IRepository {

    constructor(){
        
    }
    _run(sql) {
        db.run(sql).then((r) => {
        }, (e) => {
            console.error("ERROR!");
            console.log(sql);
            console.log(e);
        });
    }
    async _getAll(sql, params) {
        return await db.all(sql, params);
    }
    async _insert(sql, params) {
        var item = await db.run(sql, params);
        console.log("item: ");
        console.log(item);
        return item;
    }
    async _get(sql, params) {
        return await db.get(sql, params);
    }
}

module.exports = IRepository;
