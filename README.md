Overview

Book Finder is a web application that allows users to search for books by title or author, filter results, and sort them using the Google Books API. It displays book cover, title, authors, and published year in a clean, user-friendly interface.

Website link: https://www.bonheurdivin.tech/

Demo video link: https://drive.google.com/file/d/1l3h52OFSYtj6MsoMlzSggxwBvYqi-ddl/view?usp=drive_link

Features

Search books by title or author

Filter results by:

Published Year (before or after 2010)

Print Type (Books / Magazines)

Sort results by:

Title (A–Z)

Published Date

Technologies

HTML

CSS

JavaScript (Fetch API)

Google Books REST API

How to Run Locally

Open the above link in a web browser.

Enter a book title or author in the search bar.

Click the Search button.

Apply filters and sorting as needed to browse results.

How to Deploy to Web Servers

Ensure your project folder contains:

index.html
style.css
script.js


Push your code to your GitHub repository:

git add .
git commit -m "Add book finder website with filters and sorting"
git push origin main



Google Books API Documentation

Official Documentation: [Google Books API](https://developers.google.com/books/docs/v1/using)

Base URL:

https://www.googleapis.com/books/v1/volumes


Search Example:
[Click to try](https://www.googleapis.com/books/v1/volumes?q=harry+potter)

Request Parameters:

Parameter	Description	Example
q	Search keyword (title or author)	q=harry potter
printType	Type of print (books / magazines)	printType=books
maxResults	Number of results (max 40)	maxResults=20

JSON Response Fields Used:

volumeInfo.title – Book title

volumeInfo.authors – Array of authors

volumeInfo.publishedDate – Published date

volumeInfo.imageLinks.thumbnail – Book cover image

Filtering & Sorting Logic

Year Filter: Show books published before or after 2010

Print Type Filter: Filter by books or magazines using printType parameter

Sorting:

Title (A–Z) – Alphabetical order

Published Date – Convert date to year and sort descending

Credits & Acknowledgements

[Google Books API Documentation](https://developers.google.com/books/docs/v1/using)
 – for book data

Icons & UI inspired by standard HTML/CSS practices


