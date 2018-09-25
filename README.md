# My Reads (React Bookshelf App)
##### *A Udacity FEND Project*

## About The Project

Bookshelf web application for sorting and storing books build with [React](https://reactjs.org/) and [React Router](https://reacttraining.com/react-router/). Part of Udacity's [Front End Nanodegree](https://eu.udacity.com/course/front-end-web-developer-nanodegree--nd001) program (Project 7). 

## Use

On the main page you will see three shelves - **Currently Reading**, **Want To Read** and **Read**. You can move books between shelves. 

You can also add more books to the shelves by using the '**+**' button on the bottom right. This will lead you to the `/search` page where you can search for a book/s and then add to a shelf via the button in the bottom right corner on each book. 

## Setup & Installation

See the project [HERE](https://todiros.github.io/my-reads/). 
    
Alternatively, you can clone this repository and `npm install` and then `npm start` to run it on a local server.  

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query, maxResults)
```

* query: `<String>`
* maxResults: `<Integer>` Due to the nature of the backend server, search results are capped at 20, even if this is set higher.
* Returns a Promise which resolves to a JSON object containing a collection of book objects.

## Search Terms
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Dependencies 

See [`package.json`](https://github.com/Todiros/my-reads/blob/master/package.json)

## Technology

* HTML, CSS, JavaScript (ES6)
* [React](https://reactjs.org/)
* [React-Router](https://reacttraining.com/react-router/)
* [Create React App](https://github.com/facebookincubator/create-react-app) ([React Scripts](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md))
* [Node.JS](https://nodejs.org/en/) with [NPM](https://www.npmjs.com/)
