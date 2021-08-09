const express = require("express");

const app = express();

// app.mountpath method
const admin = express();
admin.get("/dashboard", (req, res) => {
  console.log(admin.mountpath);
  res.send("Admin mountpath");
});
app.use("/admin", admin);

app.listen(3000, () => {
  console.log("Listing on port 3000");
});
