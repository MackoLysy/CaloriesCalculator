const IRepository = require('./IRepository');


class Category extends IRepository {
    constructor() {
        super();
        this.tableName = "category";
    }

    async createTable() {
        var sql = "CREATE TABLE IF NOT EXISTS " + this.tableName + " " +
            "(id INTEGER PRIMARY KEY AUTOINCREMENT," +
            "name TEXT," +
            "parentId INTEGER" +
            ")";
        await this._run(sql);
    }

    findCategoryByName(name) {
        var sql = 'SELECT * FROM ' + this.tableName + ' WHERE name = "' + name + '"';
        return this._get(sql);
    }

    async addCategory(category) {
        console.log(category);
        var sql = "INSERT INTO " + this.tableName + "(name, parentId) VALUES (?, ?)";
        if (!category.parent) {
            return this._insert(sql, [category.name, 0]);
        }
        else {
            var parent = await this.findCategoryByName(category.parent);
            return this._insert(sql, [category.name, parent.id]);
        }
    }
}

module.exports = Category;