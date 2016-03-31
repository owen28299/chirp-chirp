var chirp = require('../chirp.js');
var chai = require('chai');
var expect = chai.expect;

describe('chirp', function(){
  it('should be a function', function(){
    expect(chirp).to.be.a('function');
    expect(chirp(3,"chirp")).to.equal("chirp chirp chirp");
  });
});



