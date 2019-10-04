const express = require('express');
const pg = require('pg');

var app = express();

const pool = new pg.Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'bancoTesteLocal',
  password: 'senha123',
  port: 5432
})

app.get('/', mainResponse);

function mainResponse(request, response) {

  var ok = 5;
  pool.query('SELECT * FROM integrador.produto_venda p WHERE p.id_cidade = $1 AND p.cod_prod_totvs = $2', ['CAMPO MOURAO', '080005'], (error, result) => {
    response.json(result.rows[0]);
  });
  pool.end();
  asdasd
  console.log(ok);
}

app.listen(3000);