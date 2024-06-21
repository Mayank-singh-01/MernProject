const express = require("express");
const connectMongoDB = require("./Db.jsx");

const app = express();
const port = 5000;

connectMongoDB();

app.get("/", (req, res) => {
  res.send("Hello, it's Mayank");
});

app.listen(port, () => {
  console.log(`App started at port ${port}`);
});
