// Get DOM elements
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const resultsSection = document.getElementById('results');

// Function to fetch books from Google Books API
async function fetchBooks(query) {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${query}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayBooks(data.items);
    } catch (error) {
        resultsSection.innerHTML = `<p>Error fetching books. Please try again.</p>`;
        console.error('Error:', error);
    }
}

// Function to display books
function displayBooks(books) {
    resultsSection.innerHTML = ''; // Clear previous results
    if (!books) {
        resultsSection.innerHTML = '<p>No results found.</p>';
        return;
    }

    books.forEach(book => {
        const bookInfo = book.volumeInfo;
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');

        bookCard.innerHTML = `
            <img src="${bookInfo.imageLinks ? bookInfo.imageLinks.thumbnail : 'https://via.placeholder.com/120x180?text=No+Image'}" alt="${bookInfo.title}">
            <h3>${bookInfo.title}</h3>
            <p><strong>Author:</strong> ${bookInfo.authors ? bookInfo.authors.join(', ') : 'Unknown'}</p>
            <p><strong>Published:</strong> ${bookInfo.publishedDate || 'N/A'}</p>
        `;

        resultsSection.appendChild(bookCard);
    });
}

// Event listener for search button
searchBtn.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query) {
        fetchBooks(query);
    }
});

// Optional: Enter key triggers search
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchBtn.click();
    }
});
