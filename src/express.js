const express = require('express');
const ejs = require('ejs');

var app = express();

app.set('view engine', 'ejs');
app.use('/resources', express.static('resources'));
app.get('/', homeResponse);
app.get('/contact', contactResponse);
app.get('/profile/:name', profileResponse);

function contactResponse(request, response) {
  response.render('index');
}

function homeResponse(request, response) {
  response.render('contact');
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

function getMiddleWare(request, response, next) {

}

app.listen(3000);