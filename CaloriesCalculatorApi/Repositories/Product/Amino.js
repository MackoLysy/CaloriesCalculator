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
    addAminoInfo(value) {
        var sql = "INSERT INTO " + this.tableName +
            "(asparginAcid, alanina, histydyna, glutaminan, " +
            "glicynie, hydroksyproline, serynie, proline, " +
            "arginine, waline, leucynie, izoleucynie, " +
            "treonine, lizynie, metionina, tyrozyna, " +
            "fenyloalanine, cystynie, tryptofine) VALUES " +
            "(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        return this._insert(sql, [
            value.asparginAcid, value.alanina, value.histydyna, value.glutaminan,
            value.glicynie, value.hydroksyproline, value.serynie, value.proline, 
            value.arginine, value.waline, value.leucynie, value.izoleucynie,
            value.teronine, value.lizynie, value.metionina, value.tyrozyna, 
            value.fenyloalanine, value.cystynie, value.tryptofine
        ]);
    }
}

module.exports = Amino;