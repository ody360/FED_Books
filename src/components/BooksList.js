import React from 'react'
const data = require('../BooksDB/FED_Books.json')

const BooksList = (books) => {
  const bList = books.books.map( b => {
    return (
        <div className="card">
          
          <img className="card-img-top" src={b.volumeInfo.imageLinks.thumbnail}/>
          <div className="card-block">
            <h4 className="card-title">${b.volumeInfo.title}</h4>
            <h5 className="card-subtitle">${b.volumeInfo.authors[0]}</h5>
          </div>
        </div>
     
      
  )}
  )

  return <div className="card-group">
		
          {bList}
     
		</div>;
}


export default BooksList 