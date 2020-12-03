require("dotenv").config();
const cors = require("cors");
const path = require("path");
const express = require("express");
const server = express();

const body_parser = require("body-parser");

// parse JSON (application/json content-type)
server.use(body_parser.json());
server.use(express.json());
server.use(express.static(__dirname + "/dist/markplace-app"));
server.use(cors());

const port = 3000;

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

    server.get("/*", function (req, res) {
      res.sendFile(path.join(__dirname + "/dist/markplace-app/index.html"));
    });
  },
  function (err) {
    throw err;
  }
);

server.listen(port, () => {
  console.log(`Server listening at ${port}`);
});
