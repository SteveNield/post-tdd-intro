var library = require('./library'),
    chai = require('chai');

const should = chai.should();

describe('library', function(){
  it('exists', function(){
    library.should.exist;
  })
})
