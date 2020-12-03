const express = require("express");

const router = express();

const BlogPost = require("../models/blogPost");

// Routes
router.get("/blogs", async (req, res) => {
    const foods = await BlogPost.find({});

    try {
      res.send(foods);
    } catch (err) {
      res.status(500).send(err);
    }
});

module.exports = router;
