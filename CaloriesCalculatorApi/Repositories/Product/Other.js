const IRepository = require("../IRepository");


class Other extends IRepository {
    constructor() {
        super();
        this.tableName = "productOther";
        this.createTable();
    }

    createTable() {
        var sql = "CREATE TABLE IF NOT EXISTS " + this.tableName + " " +
            "(id INTEGER PRIMARY KEY AUTOINCREMENT," +
            "teobromina FLOAT," +
            "kofeina FLOAT," +
            "alkohol FLOAT" +
            ")";
        this._run(sql);
    }
    addOtherInfo(value) {
        var sql = "INSERT INTO " + this.tableName + "(teobromina, kofeina, alkohol)" +
            "VALUES (?, ?, ?)";
        return this._insert(sql, [value.teobromina, value.kofeina, value.alkohol]);

    }
}

module.exports = Other;