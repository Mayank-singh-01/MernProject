// const mongoose = require("mongoose");

// const mongoUrl =
//   process.env.MONGO_URL || "mongodb://localhost:27017/yourDatabaseName"; 

// const mongoDB = async () => {
//   try {
//     await mongoose.connect(mongoUrl, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("MongoDB connected");

//     const db = mongoose.connection.db;
//     const fetchedData = await db.collection("foodData").find({}).toArray( function(err,data){
//       if (err) {
//         console.log(err);
//       } else {
//         global.foodData = data;
//       }
//     } ); 
      
//   } catch (err) {
//     console.error("Error connecting to MongoDB:", err.message);
//     process.exit(1); // Exit process with failure
//   }
  
// };

// module.exports = mongoDB;

const mongoose = require("mongoose");

const mongoUrl =
  process.env.MONGO_URL || "mongodb://localhost:27017/yourDatabaseName";

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");

    const db = mongoose.connection.db;
    global.foodData = await db.collection("foodData").find({}).toArray();
    console.log("Food data loaded");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = mongoDB;
