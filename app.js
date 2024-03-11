const express = require("express");
const app = express();
const IndexRouter = require("./routes/index");

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { title: "Message Board" });
});

app.use(IndexRouter);

module.exports = app;
