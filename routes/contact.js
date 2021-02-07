const express = require("express");

const router = express();

const Message = require("../models/message_model");
const { request } = require("./courses");

// Routes
router.post("/contact", async (req, res) => {
    let message = new Message({
        name: req.body.name,
        email: req.body.name,
        message: req.body.message
    });

    try {
      Message.insertOne(message);
    } catch (err) {
      res.status(500).send(err);
    }
});

module.exports = router;
