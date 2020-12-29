'use strict';

const express = require('express');
const app = express();

// middleware
const parser = require('body-parser');
const lostPageHandler = require('../lib/error-handlers/404');
const serverErrorHandler = require('../lib/error-handlers/500');
const requestLogger = require('../lib/middleware/logger');
const validatior = require('../lib/middleware/validator');


app.use(parser.json());
app.use(requestLogger);

app.get('/', homeHandler);
app.get('/person',validatior, personRender);

app.use('*', lostPageHandler);
app.use(serverErrorHandler);

function homeHandler(request,response){
  response.status(200).send('Hello');
}

function personRender(request,response){
  let personName = {
    name: request.query.name,
  };
  response.status(200).json(personName);
}
function start(PORT){
  app.listen(PORT, () =>{
    console.log(`coming to life on ${PORT}`);
  });
}

module.exports = {
  server : app,
  start: start,
};