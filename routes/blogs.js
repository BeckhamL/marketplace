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

router.post("/blog", async (req, res) => {
  let blog = new Blogs({
    title: req.body.title,
    content: req.body.content,
    shortDescription: req.body.shortDescription,
    author: 'David Lau',
    date: req.body.date
  });

  blog
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json(error);
    });
});

module.exports = router;
