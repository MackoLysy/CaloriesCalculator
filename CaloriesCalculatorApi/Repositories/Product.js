const IRepository = require('./IRepository');
const Amino = require('./Product/Amino');
const Fat = require('./Product/Fat');
const Info = require('./Product/Info');
const Mineral = require('./Product/Mineral');
const Other = require('./Product/Other');
const Vitamin = require('./Product/Vitamin');
const Category = require('./Category');

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
        this.category = new Category();
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

    async addProduct(productToInsert) {
        var result = await this.findProductByName(productToInsert.name);
        if (!result) {
            var categoryId = await this.category.findCategoryByName(this.getCategoriesName(productToInsert.categories));
            var infoResult = await this.info.addProductInfo(productToInsert.base);
            var vitResult = await this.vitamin.addVitaminInfo(productToInsert.vit);
            var minResult = await this.mineral.addMineralInfo(productToInsert.min);
            var fatResult = await this.fat.addFatInfo(productToInsert.fat);
            var aminoResult = await this.amino.addAminoInfo(productToInsert.amino);
            var otherResult = await this.other.addOtherInfo(productToInsert.other);
            var product = [
                productToInsert.name,
                categoryId.id,
                infoResult.id,
                vitResult.id,
                minResult.id,
                fatResult.id,
                aminoResult.id,
                otherResult.id,
            ];
            var sql = "INSERT INTO " + this.tableName + "(name, categoryId, infoId, vitaminId, mineralId, fatId, aminoAcidId, otherId)" +
                "VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
            return this._insert(sql, product);
        }
        else {
            console.log("Istnieje juz : " + productToInsert.name);
            return result;
        }
    }

    getCategoriesName(categories) {
        return categories[categories.length - 1].name;
    }

    findProductByName(name) {
        var sql = 'SELECT * FROM ' + this.tableName + ' WHERE name = "' + name + '"';
        return this._get(sql);
    }
}

module.exports = Product;



