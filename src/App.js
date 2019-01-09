import React, { Component } from 'react';
import './App.css';
import Bookslist from './components/BooksList'
const Data = require('./BooksDB/FED_Books.json')

class App extends Component {


  render() {
    return <main>
			<div className="jumbotron jumbotron-fluid bg-light text-dark border-bottom">
				<div className="container">
					<h5>WeAssemble</h5>
					<h1>Books</h1>
				</div>
      </div>

      <section className="container">
        <div className="row">
         
            <Bookslist books={ Data.items } />
        
        </div>
      </section>
  
		</main>;
  }
}

export default App;
