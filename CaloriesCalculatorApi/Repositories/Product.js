const IRepository = require('./IRepository');
const Amino = require('./Product/Amino');
const Fat = require('./Product/Fat');
const Info = require('./Product/Info');
const Mineral = require('./Product/Mineral');
const Other = require('./Product/Other');
const Vitamin = require('./Product/Vitamin');

class Product extends IRepository {
    constructor() {
        super();
        this.tableName = "product";
        this.createTable();
        this.amino = new Amino();
        this.fat = new Fat();
        this.info = new Info();
        this.mineral = new Mineral();
        this.other = new Other();
        this.vitamin = new Vitamin();
    }
    createTable() {
        var sql = "CREATE TABLE IF NOT EXISTS " + this.tableName + " " +
            "(id INTEGER PRIMARY KEY AUTOINCREMENT," +
            "name TEXT," +
            "categoryId INTEGER NOT NULL," +
            "infoId INTEGER NOT NULL," +
            "vitaminId INTEGER NOT NULL," +
            "mineralId INTEGER NOT NULL," +
            "fatId INTEGER NOT NULL," +
            "aminoAcidId INTEGER NOT NULL," +
            "otherId INTEGER NOT NULL)";
        this._run(sql);
    }

    insert(productToInsert) {
        this.info.insert(productToInsert.base);
    }
}

module.exports = Product;



