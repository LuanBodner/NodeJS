const express = require('express');
const ejs = require('ejs');
const bodyparser = require('body-parser');

var app = express();

var urlencodedParser = bodyparser.urlencoded({
  extended: false
});

app.set('view engine', 'ejs');
app.use('/resources', express.static('resources'));
app.get('/', homeResponse);
app.get('/contact', contactResponse);
app.post('/contact', urlencodedParser, contactPost);
app.get('/profile/:name', profileResponse);

function contactResponse(request, response) {
  response.render('contact', {
    qs: request.query
  });
}

function contactPost(request, response) {
  response.render('contact-success', {
    data: request.body
  });
}

function homeResponse(request, response) {
  response.render('index');
}

function profileResponse(request, response) {
  var data = {
    age: 29,
    job: 'ninja',
    hobbies: ['eating', 'fighting', 'fishing']
  }
  response.render(__dirname + '/views/profile', {
    person: request.params.name,
    data: data
  });
}

app.listen(3000);