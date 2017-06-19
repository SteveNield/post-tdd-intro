var Library = require('./library'),
    chai = require('chai'),
    books = require('./data/books');

const should = chai.should();

describe('library', function(){
  it('displays all books', function(){
    Library(books).getAllBooks().should.deep.equal(books);
  })
})
