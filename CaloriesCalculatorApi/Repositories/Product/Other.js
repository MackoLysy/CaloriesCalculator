const IRepository = require("../IRepository");


class Other extends IRepository {
    constructor() {
        super();
        this.tableName = "productOther";
        this.createTable();
    }

    createTable() {
        var sql = "CREATE TABLE IF NOT EXISTS " + this.tableName+ " " +
            "(id INTEGER PRIMARY KEY AUTOINCREMENT," +
            "teobromina FLOAT," +
            "kofeina FLOAT," +
            "alkohol FLOAT" +
            ")";
        this._run(sql);
    }
}

module.exports = Other;