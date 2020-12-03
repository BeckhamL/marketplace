require("dotenv").config();
const cors = require("cors");
const path = require("path");
const express = require("express");
const server = express();

const body_parser = require("body-parser");

// parse JSON (application/json content-type)
server.use(body_parser.json());
server.use(express.json());
server.use(cors());

const db = require("./db");
const dbName = process.env.dbName;
const collectionName = process.env.collectionName;

db.initialize(
  dbName,
  collectionName,
  function (dbCollection) {
    server.get("/workshops/:id", (request, response) => {
      const itemId = request.params.id;

      dbCollection.findOne({ _id: itemId }, (error, result) => {
        if (error) throw error;
        response.json(result);
      });
    });
  },
  function (err) {
    throw err;
  }
);

server.use(express.static(__dirname + "/dist/markplace-app"));

server.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/markplace-app/index.html"));
});

server.listen((process.env.PORT || 3000), () => {
  console.log(`Server listening at 3000`);
});
