const mongoose = require("mongoose");

const mongoUrl =
  process.env.MONGO_URL || "mongodb://localhost:27017/yourDatabaseName"; // Add your database name

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");

    const db = mongoose.connection.db;
    const fetchedData = await db.collection("users").find({}).toArray();

    // if (process.env.NODE_ENV !== "production") {
    //   console.log("Here's the data:", fetchedData);
    // }
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = mongoDB;
