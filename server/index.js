const express = require('express');
const path = require('path');
const db = require('../database/index.js');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../angular-client/')));

app.get('/cats', (req, res) => {
  // TODO - your code here!


});

app.post('/addCats', (req, res) => {
  console.log('abdalluios', req.body)
  res.sendStatus(404)
})



let port = 1128;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
module.exports = app


