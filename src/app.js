const express = require("express");
const cors = require("cors");
const routes = require("./routes/routes");
const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.json());
app.use(cors());

app.use("/routes", routes);

app.listen(PORT, () => {
  console.log(`Server run on ${PORT}`);
});