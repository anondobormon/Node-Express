const express = require("express");

const app = express();

app.use(express.json());
app.use(express.raw());
app.use(express.text());
app.use(express.urlencoded());

app.use(
  express.static(`${__dirname}/public/`, {
    index: "home.html",
  })
);

const router = express.Router({
  caseSensitive: true,
});
app.use(router);

router.get("/home", (req, res) => {
  res.send("This is Router function work");
});

app.get("/", (req, res) => {
  res.send("This is home page");
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send("This is home with post request");
});

app.listen(3000, () => {
  console.log("Listing on port 3000");
});
