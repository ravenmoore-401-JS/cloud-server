'use strict';

const { server } = require('../lib/server');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('web server', () => {
  it('should respond with a 404', () => {
    return mockRequest
      .get('/purplehaze')
      .then(results => {
        expect(results.status).toBe(404);
      }).catch(console.error);
  });

  it('should respond with a 500 if no data on person route', ()=>{
    return mockRequest
      .get('/person')
      .then(results =>{
        expect(results.status).toBe(500);
      }).catch(console.error);
  });


  it('should respond with a 200 on /person with a name on the req.query', ()=>{
    return mockRequest
      .get('/person?name=jo')
      .then(results =>{
        expect(results.status).toBe(200);
      }).catch(console.error);
  });

});