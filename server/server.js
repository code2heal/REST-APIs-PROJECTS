var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose_connect.js'); //create a connection to mongose and create a db
var {courses} = require('./models/user_course.js'); // create a collection /models


var app = express(); // start the express server

app.use(bodyParser.json()); // middleware to accept post request of objects json format
app.use(bodyParser.urlencoded({extended: true})); // middleware to encode url

//create a doc call todos
app.post('/course', (req, res) =>{
  // console.log(req.body);

var ana101 = new courses({
    //requesting the text content of the body
    tutor: req.body.tutor,
    duration: req.body.duration,
    rating: req.body.rating,
    certified: req.body.certified
  });

  ana101.save().then((doc)=>{
  res.send(doc);
  }, (error)=>{
  res.status(400).send(error);

  client.close();
  });
});


app.listen(3000, ()=>{
  console.log('App Started On Port 3000');
});
