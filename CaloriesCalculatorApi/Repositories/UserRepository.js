const IRepository = require('./IRepository');

class UserRepository extends IRepository {

    constructor() {
        super();
        this.createTable();
    }

    createTable() {
        var sql = "CREATE TABLE IF NOT EXISTS user (id INTEGER PRIMARY KEY AUTOINCREMENT, userName TEXT UNIQUE, password TEXT)";
        this._run(sql,[]);
    }

    async get(sql) {
        await this._get(sql)
    }

    async insertUser(user) {
        var sql = "INSERT INTO user (userName, password) VALUES (?, ?)";
        await this._insert(sql,[user.username, user.password]);
    }
}



module.exports = UserRepository;