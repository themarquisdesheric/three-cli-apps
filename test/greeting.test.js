const assert = require('assert');
const greet = require('../greeting.js');

describe('returns a greeting based on the time provided', () => {

  it('should return good morning and the name if second argument is between 00:00 - 11:59', () => {
    
    assert.equal(greet(), 'Hello');
  });

});