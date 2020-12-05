const express = require("express");

const router = express();

const Workshops = require("../models/workshop_model");

// Routes
router.get("/workshops", async (req, res) => {
    const workshops = await Workshops.find({});

    try {
      res.send(workshops);
    } catch (err) {
      res.status(500).send(err);
    }
});

module.exports = router;
