const express = require("express");

const bodyParser = require("body-parser");

const ejs = require("ejs");

const app = express();

const date = require(__dirname + "/date.js");

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

const PORT = 3000;

let title = "Hello World";

app.get("/about", function (req, res) {
  let paragraph = date.getDay();

  res.render("about", { Title: title, text: paragraph });
});

app.post("/about", function (req, res) {
  let newTitle = req.body.newTitle;

  title = newTitle;

  res.redirect("/about");
});

app.get("/portofolio", function (req, res) {
  res.render("portofolio", { Title: title });
});

app.post("/portofolio", function (req, res) {
  let newTitle = req.body.newTitle;

  res.render("portofolio", { Title: newTitle });

  res.redirect("/portofolio");
});

app.listen(PORT, function () {
  console.log("Listening on port [" + PORT + "]");
});
