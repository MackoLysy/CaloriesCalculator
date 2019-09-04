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

    addVitaminInfo(value) {
        var sql = "INSERT INTO " + this.tableName + "(" +
            "vitARAE, vitAIU, vitARET, betaCaroten, alfaCaroten, vitB1, vitB2, niacyn, " +
            "vitB5, vitB6, vitB9, vitB12, vitC, vitD, vitE, vitK1, folan, folacyna, vitB12Added, " +
            "betaina, betaTokoferol, luteina, likopen, folionAcid, gammaTokoferol) VALUES(" +
            "?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        return this._insert(sql, [
            value.vitARE, value.vitAUI, value.vitARET, value.betaCaroten,
            value.alfaCaroten, value.vitB1, value.vitB2, value.niacyn,
            value.vitB5, value.vitB6, value.vitB9, value.vitB12, 
            value.vitC, value.vitD, value.vitK1, value.floan, 
            value.floacyna, value.vitb12Added, value.betaina, value.betaTokoferol,
            value.luteina, value.likopen, value.folionAcid, value.gammaTokoferol
        ]);

    }
}



module.exports = ProcVitamin;