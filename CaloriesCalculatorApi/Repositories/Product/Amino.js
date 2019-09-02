const IRepository = require('../IRepository');

class Amino extends IRepository {
    constructor() {
        super();
        this.tableName = "productAmino";
        this.createTable();
    }

    createTable() {
        var sql = "CREATE TABLE IF NOT EXISTS " + this.tableName + " " +
            "(id INTEGER PRIMARY KEY AUTOINCREMENT," +
            "asparginAcid FLOAT," +
            "alanina FLOAT," +
            "histydyna FLOAT," +
            "glutaminan FLOAT," +
            "glicynie FLOAT," +
            "hydroksyproline FLOAT," +
            "serynie FLOAT," +
            "proline FLOAT," +
            "arginine FLOAT," +
            "waline FLOAT," +
            "leucynie FLOAT," +
            "izoleucynie FLOAT," +
            "treonine FLOAT," +
            "lizynie FLOAT," +
            "metionina FLOAT," +
            "tyrozyna FLOAT," +
            "fenyloalanine FLOAT," +
            "cystynie FLOAT," +
            "tryptofine FLOAT" +
            ")";
        this._run(sql);
    }
    insert(aminoData) {
        
    }
}

module.exports = Amino;