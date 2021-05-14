const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  var num1 = req.body.num1;
  var num2 = req.body.num2;

  var result = num1 + num2;
  console.log(req.body);
  res.send(`the result of the calculation is ${result}`);
});

/// BMI CALCULATER

app.get("/bmicalculator", (req, res) => {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", (req, res) => {
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);

  var bmi = (weight / height) * height;
  console.log(req.body);
  res.send(`your BMI is ${bmi}`);
});

app.listen(3000, () => {
  console.log("server is on port 3000");
});
