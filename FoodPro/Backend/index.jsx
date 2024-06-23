const express = require("express");
const connectMongoDB = require("./Db.jsx");
const app = express();
const port = 5002;

connectMongoDB();

app.get("/", (req, res) => {
  res.send("Hello, Mayank this side");
});

app.use(express.json());
app.use("/api",require("./Routes/CreatUser.jsx"))

app.listen(port, () => {
  console.log(`App started at port ${port}`);
});
