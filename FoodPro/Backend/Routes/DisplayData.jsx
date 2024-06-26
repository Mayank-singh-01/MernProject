// const express = require("express");
// const router = express.Router();

// router.post('/foodData',(req,res)=>{
//    try {
//       res.send(global.foodData);
//        console.log(global.foodData);
//    } catch (error) {
//       res.send("server error")
//    }
// });

// module.exports = router;

const express = require("express");
const router = express.Router();

router.post("/foodData", (req, res) => {
  try {
    if (!global.foodData) {
      return res.status(500).send("Food data not loaded");
    }
    res.send(global.foodData);
    console.log(global.foodData);
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).send("Server error");
  }
});

module.exports = router;

