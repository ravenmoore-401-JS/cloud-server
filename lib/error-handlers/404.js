'use strict';

function lostPageHandler(request,response,next){
  response.status(404);
  response.statusMessage = 'Page not Found';
  response.json({ error: 'not Found'});
}

module.exports = lostPageHandler;