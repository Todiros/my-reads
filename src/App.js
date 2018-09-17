import React from 'react'
// import SearchPage from './SearchPage'
import HomePage from './HomePage'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({books: books})
    })
    
  }

  render() {
    return (
      <div className="app">
        <HomePage 
          books={this.state.books}
        />
      </div>
    )
  }
}

export default BooksApp
