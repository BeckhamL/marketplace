const express = require("express");

const router = express();

const Courses = require("../models/courses_model");

// Routes
router.get("/courses", async (req, res) => {
    const courses = await Courses.find({});

    try {
      res.send(courses);
    } catch (err) {
      res.status(500).send(err);
    }
});

router.get("/course/:id", async (req, res) => {

  var id = req.params.id;
  const course = await Courses.findOne({ id: id});

  try {
    res.send(course);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
