const IRepository = require('../IRepository');

class ProcVitamin extends IRepository {
    constructor() {
        super();
        this.tableName = "productVit";
        this.createTable();
    }
    createTable() {
        var sql = "CREATE TABLE IF NOT EXISTS " + this.tableName + " " +
            "(id INTEGER PRIMARY KEY AUTOINCREMENT," +
            "vitARAE FLOAT," +
            "vitAIU FLOAT," +
            "vitARET FLOAT," +
            "betaCaroten FLOAT," +
            "alfaCaroten FLOAT," +
            "vitB1 FLOAT," +
            "vitB2 FLOAT," +
            "niacyn FLOAT," +
            "vitB5 FLOAT," +
            "vitB6 FLOAT," +
            "vitB9 FLOAT," +
            "vitB12 FLOAT," +
            "vitC FLOAT," +
            "vitD FLOAT," +
            "vitE FLOAT," +
            "vitK1 FLOAT," +
            "folan FLOAT," +
            "folacyna FLOAT," +
            "vitB12Added FLOAT," +
            "betaina FLOAT," +
            "betaTokoferol FLOAT," +
            "luteina FLOAT," +
            "likopen FLOAT," +
            "folionAcid FLOAT," +
            "gammaTokoferol FLOAT" +
            ")";
        this._run(sql);
    }
}



module.exports = ProcVitamin;