import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import PropTypes from 'prop-types'

class HomePage extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    moveShelf: PropTypes.func.isRequired
  }

  filterBooksByShelf(books, shelf) {
    return ( 
      books.filter(book => book.shelf === shelf)
        .map(book => (
          <li key={book.id}>
            <Book 
              book={book}
              moveShelf={this.props.moveShelf}
              currentShelf={shelf}
            />
          </li>
        ))
    ) 
  }

  render () {
    const { books } = this.props

    return (
      <div className="list-books">
      <div className="list-books-title">
      <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
      <div>
        <div className="bookshelf">
        <h2 className="bookshelf-title">
          Currently Reading <span>({ this.filterBooksByShelf(books, 'currentlyReading').length })</span>
        </h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            { this.filterBooksByShelf(books, 'currentlyReading') }
          </ol>
        </div>
        </div>
        <div className="bookshelf">
        <h2 className="bookshelf-title">
          Want to Read <span>({ this.filterBooksByShelf(books, 'wantToRead').length })</span>
        </h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            { this.filterBooksByShelf(books, 'wantToRead') }
          </ol>
        </div>
        </div>
        <div className="bookshelf">
        <h2 className="bookshelf-title">
          Read <span>({ this.filterBooksByShelf(books, 'read').length })</span>
        </h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            { this.filterBooksByShelf(books, 'read') }
          </ol>
        </div>
        </div>
      </div>
      </div>
      <div className="open-search">
      <Link to="/search">Add a book</Link>
      </div>
      </div>
    )
  }
}

export default HomePage