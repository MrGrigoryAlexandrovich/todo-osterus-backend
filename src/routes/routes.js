const express = require('express')
const router = express.Router()



router.post("/create", async (req, res) => {
    res.end('create')
});


router.get('/todos', async (req, res) => {
    res.end('todos')
})

router.patch('/edit', async (req, res) => {
    res.end('edit')
})

router.delete('/delete', async (req, res) => {
    res.end('delete')
})

module.exports = router