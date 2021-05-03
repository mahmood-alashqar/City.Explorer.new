const express = require('express')
const cors = require('cors');
const app = express()
 app.use(cors());

app.get('/', function (req, res) {
  res.send('Hello World')
});
app.get('/about', function (req, res) {
    console.log('server');
  });
 
app.listen(3001)
//
