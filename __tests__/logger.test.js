const loggerMiddleware = require('../lib/middleware/logger');

describe('logger middleware', () => {
  let consoleSpy;
  let request = {};
  let response = {};
  let next = jest.fn(); // spy on the next method

  beforeEach(() => {
    // Attach to the console
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() =>{
    // put the console back
    consoleSpy.mockRestore();
  });

  it('properly logs some output', () => {
    loggerMiddleware(request, response, next);
    expect(consoleSpy).toHaveBeenCalled();
  });

});