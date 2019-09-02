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
}

module.exports = Fat;