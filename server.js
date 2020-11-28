const express = require('express');
const path = require('path');
require('dotenv').config();
const cors = require('cors');
const app = express();

const mongoose = require('mongoose');
const url = 'mongodb://127.0.0.1:27017/marketplace';

app.use(express.json());
app.use(express.static(__dirname + "/dist/markplace-app"));
app.use(cors())

mongoose.connect(url, {useNewUrlParser: true});
const db = mongoose.connection;

db.once('open', _ => {
  console.log('Database connected:', url)
})
  
db.on('error', err => {
  console.error('connection error:', err)
})

app.get('/workshops', function(req, res) {
  db.collection('workshops').find({}).toArray(function(err, docs) {
      if(err) { console.error(err) }
      res.send(JSON.stringify(docs))
  })
});

app.get('/outlines', function(req, res) {
  db.collection('outlines').find({}).toArray(function(err, docs) {
      if(err) { console.error(err) }
      res.send(JSON.stringify(docs))
  })
});

app.get('/blogs', function(req, res) {
  db.collection('blogs').find({}).toArray(function(err, docs) {
      if(err) { console.error(err) }
      res.send(JSON.stringify(docs))
  })
});

app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname + '/dist/markplace-app/index.html'));
});

app.listen(process.env.PORT || 3000);