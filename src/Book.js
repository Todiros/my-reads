import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    moveShelf: PropTypes.func.isRequired,
    currentShelf: PropTypes.string.isRequired
  }

  render () {
    const { book, moveShelf, currentShelf } = this.props

    const bookThumbnail = book.imageLinks ? 
                        book.imageLinks.thumbnail :
                        '';
    const bookAuthors = book.authors ?
                      book.authors.join(', ') :
                      '';
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" 
            style={{ width: 128, height: 193, backgroundImage: `url("${bookThumbnail}")` }}>
          </div>
          <div className="book-shelf-changer">
          <select
            onChange={(event) =>
              moveShelf(
                book, event.target.value
              )
            } value={currentShelf}>

            <option value="move" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{bookAuthors}</div>
      </div>
    )
  }
}

export default Book