const express = require("express");
const connectMongoDB = require("./Db.jsx");

const app = express();
const port = 5000;

// Connect to MongoDB
connectMongoDB();

// Define a route
app.get("/", (req, res) => {
  res.send("Hello, it's Mayank");
});

// Start the server
app.listen(port, () => {
  console.log(`App started at port ${port}`);
});
