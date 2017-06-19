module.exports = function(books){

  function getAllBooks(){
    return books;
  }

  return {
    getAllBooks: getAllBooks
  }
}
