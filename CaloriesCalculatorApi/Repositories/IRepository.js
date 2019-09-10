const db = require('../db/Sqlite');

class IRepository {

    constructor() {

    }
    async _run(sql) {
        await db.run(sql);
    }
    async _getAll(sql, params) {
        return await db.all(sql, params);
    }
    async _insert(sql, params) {
        var item = await db.run(sql, params);
        return item;
    }
    async _get(sql, params) {
        return await db.get(sql, params);
    }
}

module.exports = IRepository;