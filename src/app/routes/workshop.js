const express = require("express");
const router = express.Router();

router.get("/users", function(req, res) {
  User.find({}, (err, users) => {

    if(err) {
      res.json({
        success: false,
        msg: "Unable to get users"
      })
    }
    else {
      res.json({
        users
      })
    }
  });
});

module.exports = router;