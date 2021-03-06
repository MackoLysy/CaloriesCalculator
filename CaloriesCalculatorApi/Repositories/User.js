const IRepository = require('./IRepository');

class UserRepository extends IRepository {

    constructor() {
        super();
        this.tableName = "user";
        this.createTable();
    }

    createTable() {
        var sql = "CREATE TABLE IF NOT EXISTS " + this.tableName + " (id INTEGER PRIMARY KEY AUTOINCREMENT, userName TEXT UNIQUE, password TEXT)";
        this._run(sql, []);
    }
    addUser(user) {
        var sql = "INSERT INTO user (userName, password) VALUES (?, ?)";
        return this._insert(sql, [user.username, user.password]);
    }

    authUser(user) {
        var sql = "SELECT * FROM user WHERE userName = ? AND password = ?";
        return this._get(sql, [user.username, user.password]);
    }
}



module.exports = UserRepository;