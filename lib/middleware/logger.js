'use strict';

function logRequest (request, response,next){
  console.log('--REQUEST--', request.method, request.path);
  next();
}

module.exports = logRequest;
