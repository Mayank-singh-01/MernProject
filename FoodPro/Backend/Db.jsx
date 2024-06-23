const mongoose = require("mongoose");
const mongoUrl = "mongodb://localhost:27017/yourDatabaseName"; // Add your database name

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoUrl, {
    });
    console.log("MongoDB connected");
    const db = mongoose.connection.db;
    const fetchedData = await db.collection("user").find({}).toArray();
    // console.log("Here's the data:", fetchedData);
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
};

module.exports = mongoDB;
