const express = require("express");
const router = express.Router();

const login = "admin";
const password = "admin";

/* GET home page. */
router.get("/", (req, res) => {
  res.render("index", { title: "Express" });
});

router.get("/login", (req, res) => {
  res.render("login", { title: "Logowanie" });
});

router.post("/login", (req, res) => {
  const body = req.body;
  if (body.login === login && body.password === password) {
    req.session.admin = 1;

    res.redirect("/admin");
  }
  console.log(req.body);

  res.redirect("/login");
});

module.exports = router;
