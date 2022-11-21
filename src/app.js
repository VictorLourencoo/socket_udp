const express = require('express');
const cors = require('cors');
const app = express();

app.use(
  cors()
  //{
  //origin: qual endereço podera acessar a aplicação
  //}
);

//Rotas
const disciplina = require('./routes/routes');

//conectando com o banco de dados
require('./Config/database');

//body parser
app.use(express.json());

app.use('/', disciplina);

module.exports = app;
