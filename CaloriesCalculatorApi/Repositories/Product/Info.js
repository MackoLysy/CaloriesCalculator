const IRepository = require('../IRepository');

class Info extends IRepository {
    constructor() {
        super();
        this.tableName = "productInfo";
        this.createTable();
    }

    createTable() {
        var sql = "CREATE TABLE IF NOT EXISTS " + this.tableName + " " +
            "(id INTEGER PRIMARY KEY AUTOINCREMENT," +
            "water FLOAT," +
            "calories FLOAT," +
            "energy FLOAT," +
            "protein FLOAT," +
            "fat FLOAT," +
            "dust FLOAT," +
            "carbs FLOAT," +
            "roughage FLOAT," +
            "sugar FLOAT," +
            "saccharose FLOAT," +
            "glucose FLOAT," +
            "fructose FLOAT," +
            "lactose FLOAT," +
            "maltose FLOAT," +
            "galactose FLOAT," +
            "starch FLOAT)";
        this._run(sql);
    }

    addProductInfo(aminoData) {
        // console.log(aminoData);
        var sql = "INSERT INTO " + this.tableName + " (water, calories, energy, protein," +
            "fat, dust, carbs, roughage, sugar, saccharose, glucose, fructose, lactose, maltose, galactose, starch) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);";
        return this._insert(sql, [aminoData.water, aminoData.calories, aminoData.energy, aminoData.protein,
        aminoData.fat, aminoData.dust, aminoData.carbs, aminoData.roughage,
        aminoData.sugar, aminoData.sacharose, aminoData.glucose, aminoData.fructose,
        aminoData.lactose, aminoData.maltose, aminoData.galactose, aminoData.starch,]);
    }

}


module.exports = Info;