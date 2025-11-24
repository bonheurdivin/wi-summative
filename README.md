Book Finder Website
Overview

Book Finder is a web application that allows users to search for books by title or author, filter results, and sort them using the Google Books API. It displays book cover, title, authors, and published year in a clean, user-friendly interface.

Website Link: https://www.bonheurdivin.tech/

Demo video link: https://drive.google.com/file/d/1l3h52OFSYtj6MsoMlzSggxwBvYqi-ddl/view?usp=drive_link

Features

Search books by title or author using a Search button

Filter results by:

Published Year (before or after 2010)

Print Type (Books / Magazines)

Sort results by:

Title (A–Z)

Published Date (Newest first)

Responsive and clean UI

Technologies

HTML

CSS

JavaScript (Fetch API)

Google Books REST API

How to Run

Open the project folder

Open the above link in a browser

Enter a book title or author in the search bar

Click the green Search button

Apply filters and sorting as needed

Browse the results displayed below

Project Structure
index.html      # Main HTML file
style.css       # Styles for layout and design
script.js       # JavaScript to fetch and display book data
README.md       # This documentation

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
q	Search keyword (title or author)	q=harry potter
printType	Type of print (books / magazines)	printType=books
maxResults	Number of results (max 40)	maxResults=20
Response Structure

items – Array of books

volumeInfo.title – Book title

volumeInfo.authors – Array of authors

volumeInfo.publishedDate – Published date

volumeInfo.categories – Array of categories

volumeInfo.imageLinks.thumbnail – Book cover image

Example:

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

Filtering & Sorting Logic

Year Filter: Show books published before or after 2010

Print Type Filter: Filter by books or magazines using printType parameter

Sorting:

Title (A–Z) – Alphabetical order

Published Date (Newest) – Convert date to year and sort descending

Acknowledgements

Google Books API Documentation