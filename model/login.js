const db = require('../config/db');
class Login {

    constructor(username, password, role) {
        this.username = username,
            this.password = password,
            this.role = role
    }
    createLogin() {
        let createSql = `insert into admin_login (username,password,role)
    values('${this.username}','${this.password}','${this.role}')`;
        return db.execute(createSql);
    }
    static getLogin() {
        let createSql = `select * from admin_login`;
        return db.execute(createSql);
    }
    static findUser(username) {
        return db.execute(`SELECT * FROM admin_login WHERE username='${username}'`)

    }
}
module.exports = Login;