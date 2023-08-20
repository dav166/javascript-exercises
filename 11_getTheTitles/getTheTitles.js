const getTheTitles = function(books) {
    return books.map(book => book.title);
  };
  
  // Example usage
  const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ];
  
  console.log(getTheTitles(books)); // ['Book','Book2']  

// Do not edit below this line
module.exports = getTheTitles;
