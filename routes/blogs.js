const express = require("express");

const router = express();

const Blogs = require("../models/blogs_model");

// Routes
router.get("/blogs", async (req, res) => {
    const blogs = await Blogs.find({});

    try {
      res.send(blogs);
    } catch (err) {
      res.status(500).send(err);
    }
});

module.exports = router;
