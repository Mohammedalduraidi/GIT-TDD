const express = require('express');
const path = require('path');
const db = require('../database/index.js');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../angular-client/')));

app.get('/getCats', (req, res) => {
  // fetch the data from data-base
  db.Cat.find({}, (err, data) => {
    if (err) {
      throw err
    } else {
      res.send(data)
    }
  })


});

app.post('/addCats', (req, res) => {
  //save the request data in data base
  let catName = req.body.catName
  let ownerEmail = req.body.ownerEmail
  let imageUrl = req.body.imageUrl
  let adoptionMessage = req.body.adoptionMessage
  let Catious = new db.Cat({
    catName: catName,
    ownerEmail: ownerEmail,
    imageUrl: imageUrl,
    adoptionMessage: adoptionMessage
  });
  Catious.save((err, data) => {
    if (err) {
      throw err;
    } else {
      console.log("jackel is here", data)
      res.send(data)
    }
  })
})



let port = 1128;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
module.exports = app


