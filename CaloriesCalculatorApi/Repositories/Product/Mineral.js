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
    addMineralInfo(value) {
        var sql = "INSERT INTO " + this.tableName +
            " (ca, fe, mg, p, k, na, zn, cu, mn, se, f) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        return this._insert(sql, [
            value.ca, value.fe, value.mg, value.p,
            value.k, value.na, value.zn, value.cu,
            value.mn, value.sn, value.f]);
    }
}

module.exports = Mineral;