const mysql = require("mysql");
const util = require("util")

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "employee_management_db"
});

connection.connect(err => {
    if (err) throw err;
});

connection.query = util.promisify(connection.query);

module.exports = connection;