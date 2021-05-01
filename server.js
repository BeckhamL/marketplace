const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;

const workshops = require("./routes/workshops");
const courses = require("./routes/courses");
const blogs = require("./routes/blogs");
const contact = require("./routes/contact");
const general = require("./routes/general");

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/workshops", workshops);
app.use("/courses", courses);
app.use("/blogs", blogs);
app.use("/contact", contact);
app.use("/general", general);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(__dirname + "/dist/markplace-app"));

  app.get("*", function (req, res, next) {
    // if (req.secure) {
      res.sendFile(path.join(__dirname + "/dist/markplace-app/index.html"));
    // } else {
    //   res.redirect(301, 'https://' + req.headers.host + req.url);
    // }

    // if (req.get("x-forwarded-proto") != "https") {
    //   res.set("x-forwarded-proto", "https");
    //   res.redirect("https://" + req.headers.host + req.url);
    // } else {
    //   next();
    // }
  });
}

app.listen(PORT, console.log(`Server is starting at ${PORT}`));
