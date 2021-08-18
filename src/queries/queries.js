const sql = require("./sql");
const connection = require("../db/connection");

module.exports = {
  Create(name, description, status) {
    let db = connection.createConn();
    return new Promise((resolve, reject) => {
      db.query(sql.create, [name, description, status], (err, result) => {
        if (err) reject(new Error());
        else resolve(result);
      });
      db.end();
    });
  },
  getall() {
    let db = connection.createConn();
    return new Promise((resolve, reject) => {
      db.query(sql.getall, (err, result) => {
        if (err) reject(new Error());
        else resolve(result);
      });
      db.end();
    });
  },
  update(name,description,id) {
    let db = connection.createConn();
    return new Promise((resolve, reject) => {
      db.query(
        sql.update,
        [name,description,id],
        (err, result) => {
          if (err) reject(new Error());
          else resolve(result);
        }
      );
      db.end();
    });
  },
  delete(id) {
    let db = connection.createConn();
    return new Promise((resolve, reject) => {
      db.query(sql.delete, id, (err, result) => {
        if (err) reject(new Error());
        else resolve(result);
      });
      db.end();
    });
  },
};
