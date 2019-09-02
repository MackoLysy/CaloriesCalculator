const IRepository = require('../IRepository');

class Mineral extends IRepository {
    constructor() {
        super();
        this.tableName = "productMineral";
        this.createTable();
    }

    createTable() {
        var sql = "CREATE TABLE IF NOT EXISTS " + this.tableName + " " +
            "(id INTEGER PRIMARY KEY AUTOINCREMENT," +
            "ca FLOAT," +
            "fe FLOAT," +
            "mg FLOAT," +
            "p FLOAT," +
            "k FLOAT," +
            "na FLOAT," +
            "zn FLOAT," +
            "cu FLOAT," +
            "mn FLOAT," +
            "se FLOAT," +
            "f FLOAT)";
        this._run(sql);
    }
}

module.exports = Mineral;