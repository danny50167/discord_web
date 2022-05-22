//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const { redirect } = require("express/lib/response");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/features", (req, res) => {
  const jsonData = require("./public/db/features.json");

  res.render("features", { jsonData: jsonData });
});

app.get("/suggestions", (req, res) => {
  res.render("suggestions");
});
app.post("/suggestions", (req,res) => {
  const userEmail = req.body.userEmail;
  const content = req.body.content;

  console.log(`${userEmail}: ${content}`);
  // res.redirect("/")
});

app.get("/")

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
