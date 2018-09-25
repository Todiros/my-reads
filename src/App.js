import React from 'react'
import { Route } from 'react-router-dom'
import SearchPage from './SearchPage'
import HomePage from './HomePage'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = { books: [] }

  componentDidMount() {
    this.getAllBooks()
  }

  moveShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)

    this.getAllBooks()
  }

  getAllBooks = () => {
    let getAllPromise = new Promise(resolve => {
      resolve(
        BooksAPI.getAll()
      )
    })    

    getAllPromise.then(books => {
      this.setState({books})
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
            <HomePage 
              books={this.state.books}
              moveShelf={this.moveShelf}
            />
          )}
        />
        <Route path="/search" render={() => (
            <SearchPage 
              moveShelf={this.moveShelf}
              books={this.state.books}
            />
          )}
        />
      </div>
    )
  }
}

export default BooksApp
