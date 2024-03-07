const express = require("express");
const messages = require("./messages");
const bodyParser = require("body-parser");

const router = express.Router();

router.use(bodyParser.urlencoded());
router.use(bodyParser.json());

router.get("/", async (req, res) => {
  await res.render("index", { messages: messages });
});

router.get("/new", async (req, res) => {
  await res.render("form");
});

router.post("/new", (req, res) => {
  const author = req.body.author;
  const msgText = req.body.msg;

  bodyParser.urlencoded({ extended: true });

  messages.push({ user: author, text: msgText, added: new Date() });

  res.redirect("/");
});

module.exports = router;
