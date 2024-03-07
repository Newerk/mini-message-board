const express = require("express");
const messages = require("./messages");
const router = express.Router();

router.get("/", async (req, res) => {
  await res.render("index", { messages: messages });
});

module.exports = router;
