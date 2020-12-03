require("dotenv").config();
const cors = require("cors");
const path = require("path");
const express = require("express");
const server = express();
const MongoClient = require("mongodb").MongoClient;
const body_parser = require("body-parser");

// parse JSON (application/json content-type)
server.use(body_parser.json());
server.use(express.json());
server.use(cors());

//const db = require("./db");
const dbConnectionUrl = process.env.MONGO_URI;
const dbName = process.env.dbName;
const collectionName = process.env.collectionName;

function initialize(
  dbName,
  dbCollectionName,
  successCallback
) {
  MongoClient.connect(dbConnectionUrl, function (err, dbInstance) {
    if (err) {
      console.log(`[MongoDB connection] ERROR: ${err}`);
    } else {
      const dbObject = dbInstance.db(dbName);
      const dbCollection = dbObject.collection(dbCollectionName);
      console.log("[MongoDB connection] SUCCESS");

      successCallback(dbCollection);
    }
  });
}

initialize(
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

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(__dirname + "/dist/markplace-app"));

  server.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname + "/dist/markplace-app/index.html"));
  });
}

server.listen(process.env.PORT || 3000, () => {
  console.log(`Server listening at 3000`);
});
