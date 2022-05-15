//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home");
  console.log("hello")
})

app.get("/features", (req,res) => {
  const jsonData = require("./public/db/features.json");

  res.render("features", {jsonData: jsonData});
})

app.listen(3000, function() {
  console.log("Server started on port 3000");
});