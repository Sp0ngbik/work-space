const express = require("express");

const app = express();

const port = process.env.port || 3000;

app.get("/apid", (req, res) => {
  console.log(res.send("Hello"));
});

app.get("*", (req, res) => {
  res.render("./src/index");
});

app.listen(port, () => {
  console.log(`listen server on port ${port}`);
});
