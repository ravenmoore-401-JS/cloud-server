'use strict';

function serverErrorHandler( error, request, response,next){
  response.status(500);
  response.statusMessage = 'Server error';
  response.json({error: error});
}

module.exports = serverErrorHandler;