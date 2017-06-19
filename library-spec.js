var Library = require('./library'),
    chai = require('chai');

const should = chai.should();

describe('library', function(){
  it('exists', function(){
    Library.should.exist;
  })

  it('returns a function', function(){
    Library.should.be.a.function;
  })
})
