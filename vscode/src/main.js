const express = require('express');
const pg = require('pg');
const bodyParser = require('body-parser');
const controller = require('./controller/crudController');

var app = express();

const pool = new pg.Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'bancoTesteLocal',
  password: 'senha123',
  port: 5432
});

controller(app, pool);

app.listen(3000);



