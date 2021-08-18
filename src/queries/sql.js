module.exports = {
    create: "INSERT INTO todo (name,description,status) VALUES(?,?,?)",
    getall: "SELECT * FROM todo",
    update: "UPDATE todo SET name=?,description=? WHERE id=?",
    delete: "DELETE FROM todo WHERE id = ?"
}