'use strict';

function validateName (request, response,next){
  if(request.query.name){
    next();
  }else{
    next('No Name');
  }
}

module.exports = validateName;
