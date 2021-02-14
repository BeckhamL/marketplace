const express = require("express");

const router = express();

const Message = require("../models/message_model");
const { request } = require("./courses");

// Routes
router.post("/message", async (req, res) => {

  console.log('request', req.body)
    let message = new Message({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    });

    message
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json(error);
    });
});

module.exports = router;
