const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("This is home page");
});

app.post("/", (req, res) => {
  res.send("This is home with post request");
});

app.listen(3000, () => {
  console.log("Listing on port 3000");
});
