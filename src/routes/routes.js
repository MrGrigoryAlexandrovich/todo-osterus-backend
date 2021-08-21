const express = require("express");
const router = express.Router();
const queries = require("../queries/queries");

router.post("/create", async (req, res) => {
  let plan = {
    name: req.body.name,
    description: req.body.description,
    status: "open",
  };
  let result = await queries.Create(plan.name, plan.description, plan.status);
  return res.sendStatus(201);
});

router.get("/getall", async (req, res) => {
  let result = await queries.getall();
  if (result.length == 0) return res.status(200).json([]);
  else return res.status(200).json(result);
});

router.put("/update/:id", async (req, res) => {
  let plan = {
    id: req.params.id,
    name: req.body.name,
    description: req.body.description,
  };
  let result = await queries.update(plan.name, plan.description, plan.id);
  if (result.affectedRows == 0) return res.sendStatus(404);
  else
    return res.json({
      id: plan.id,
      name: plan.name,
      description: plan.description,
    });
});
router.put("/updatestatus/:id", async (req, res) => {
  let todo = await queries.getTodo(req.params.id);
  let status;
  if (todo.status === "done") status = "open";
  else status = "done";
  let result = await queries.updateStatus(status, req.params.id);
  if (result.affectedRows == 0) return res.sendStatus(404);
  else return res.json({ status });
});

router.delete("/delete/:id", async (req, res) => {
  let id = req.params.id;
  let result = await queries.delete(id);
  if (result.affectedRows == 0) return res.sendStatus(404);
  else return res.sendStatus(202);
});

module.exports = router;
