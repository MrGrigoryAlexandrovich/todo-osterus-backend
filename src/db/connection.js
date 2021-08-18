const mysql = require("mysql");
const config = require("../config");
module.exports = {
    createConn() { 
        const db = mysql.createConnection({host: config.host, user: config.user, password: config.password, database: config.database});
        db.connect((err) => {
            if (err) 
                throw err;
            
        });
        return db;
    }
};