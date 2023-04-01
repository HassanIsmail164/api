const express = require("express");
var cors = require("cors");
const excelToJson = require("convert-excel-to-json");
const ExcelJS = require("exceljs");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send("Silveena");
});

app.get("/data", function (req, res) {
  res.send([
    { name: "Bayan", age: 30 },
    { name: "Hadi", age: 20 },
    { name: "Sara", age: 22 },
  ]);
});

app.get("/users", function (req, res) {
  data = excelToJson({
    sourceFile: "./data.xlsx",
  });
  console.log(data);
  res.send(data);
});

app.post("/AddUser", async function (req, res) {
  console.log(req.body);
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile("./data.xlsx").then(async function () {
    var worksheet = workbook.getWorksheet("Sheet1");
    data = [];
    data.push(req.body.name);
    data.push(req.body.family);
    data.push(req.body.img_url);
    await worksheet.insertRow(1, data);
    await workbook.xlsx.writeFile("./data.xlsx");
  });
  res.send("Saved");
});

app.listen(3000);
console.log("Server running on port 3000");
