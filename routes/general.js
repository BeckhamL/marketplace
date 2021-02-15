const express = require("express");
const router = express();
const Email = require("../models/email");

// Routes
router.post("/email", async (req, res) => {
  let email = new Email({
    email: req.body.email,
  });

  email
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json(error);
    });
});

module.exports = router;
