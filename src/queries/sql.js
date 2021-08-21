module.exports = {
    create: "INSERT INTO todo (name,description,status) VALUES(?,?,?)",
    getone: "SELECT * FROM todo WHERE id=?",
    getall: "SELECT * FROM todo",
    update: "UPDATE todo SET name=?,description=? WHERE id=?",
    updatestatus: "UPDATE todo SET status=? WHERE id=?",
    delete: "DELETE FROM todo WHERE id = ?"
}