const UserRepository = require("../Repositories/UserRepository");


module.exports = class User {

    constructor() {
        this.username = null;
        this.password = null;
        this.repository = new UserRepository();
    }

    set username(val) { this._username = val; }
    set password(val) { this._password = val; }

    get username() {
        return this._username;
    }

    get password() {
        return this._password;
    }

}