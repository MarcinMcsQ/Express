const express = require("express");
const router = express.Router();
const Quiz = require("../models/quiz");

/* GET home page. */
router.get("/", (req, res) => {
  new Quiz({ title: "" });
  res.render("quiz", { title: "Quiz" });
});

module.exports = router;
