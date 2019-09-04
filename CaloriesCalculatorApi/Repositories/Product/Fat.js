const IRepository = require('../IRepository');

class Fat extends IRepository {
    constructor() {
        super();
        this.tableName = "productFat";
        this.createTable();
    }

    createTable() {
        var sql = "CREATE TABLE IF NOT EXISTS " + this.tableName + " " +
            "(id INTEGER PRIMARY KEY AUTOINCREMENT, " +
            "cholesterol FLOAT, " +
            "stigmasterol FLOAT, " +
            "betaSitosterol FLOAT, " +
            "kampesterol FLOAT, " +
            "transPolyenoic FLOAT, " +
            "transMonoenoic FLOAT, " +
            "nasycone FLOAT, " +
            "trans FLOAT, " +
            "fitosterole FLOAT, " +
            "multiNasycone FLOAT, " +
            "oneNasycone FLOAT" +
            ")";
        this._run(sql)
    }
    addFatInfo(value) {
        var sql = "INSERT INTO " + this.tableName + "(" +
            "cholesterol, stigmasterol, betaSitosterol, kampesterol, " +
            "transPolyenoic, transMonoenoic, nasycone, trans, " +
            "fitosterole, multiNasycone, oneNasycone) VALUES " +
            "(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);"
        return this._insert(sql, [
            value.cholesterol, value.stigmasterol, value.betaSitosterol, value.kampesterol,
            value.transPolyenoic, value.transMonoenoic, value.nacycone, value.trans,
            value.fitosterole, value.multiNasycone, value.oneNasycone
        ]);
    }
}

module.exports = Fat;