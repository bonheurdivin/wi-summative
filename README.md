Book Finder Website
Overview

Book Finder Website is a web application that allows users to search for books by title or author using the Google Books API. It displays book cover, title, author(s), and published date in a clean, user-friendly interface.

Website: https://www.bonheurdivin.tech/

Video link: 

Features

Search for books by title or author

Display book cover, title, author(s), and published date

Clean, modern, medium-level design

Technologies

HTML – Website structure

CSS – Styling

JavaScript – Fetch data and display results

Google Books API – External API for book information

How to Run

Open the provided link in a web browser.

Enter a book title or author in the search bar.

Click Search or press Enter to see results.

Project Files
index.html
style.css
script.js
README.md

Google Books API Documentation
Base URL
https://www.googleapis.com/books/v1/volumes

Search Endpoint

Endpoint: /volumes?q=SEARCH_TERM

Method: GET

Example:

https://www.googleapis.com/books/v1/volumes?q=harry+potter

Parameters
Parameter	Description	Example
q	Search query (title, author, keyword)	q=harry+potter
maxResults	Number of results to return (max 40)	maxResults=20
printType	Type of print (books or magazines)	printType=books
Response Structure (JSON)

items – Array of books

volumeInfo.title – Book title

volumeInfo.authors – Array of authors

volumeInfo.publishedDate – Published date

volumeInfo.categories – Array of categories

volumeInfo.imageLinks.thumbnail – Book cover image

Example JSON snippet:

{
  "items": [
    {
      "volumeInfo": {
        "title": "Harry Potter and the Philosopher's Stone",
        "authors": ["J.K. Rowling"],
        "publishedDate": "1997-06-26",
        "categories": ["Fiction"],
        "imageLinks": {
          "thumbnail": "http://books.google.com/books/content?id=xyz&printsec=frontcover&img=1&zoom=1"
        }
      }
    }
  ]
}

Notes

No API key is required for basic searches.

The API supports filtering, sorting, and other advanced queries (not used in this beginner project).

Acknowledgements

Google Books API Documentation