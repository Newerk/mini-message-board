const express = require("express");
const app = express();
const IndexRouter = require("./routes/index");
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { title: "Message Board" });
});

app.use(IndexRouter);

module.exports = app;
