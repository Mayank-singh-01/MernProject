const mongoose = require("mongoose");
const mongoUrl = "mongodb://localhost:27017/yourDatabaseName"; // Add your database name

const mongoDB = () => {
  mongoose
    .connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB connected");
    })
    .catch((err) => {
      console.error("Error connecting to MongoDB:", err);
    });
};

module.exports = mongoDB;
