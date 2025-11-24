const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const yearFilter = document.getElementById("yearFilter");
const printType = document.getElementById("printType");
const sortBy = document.getElementById("sortBy");
const resultsDiv = document.getElementById("results");

searchInput.addEventListener("input", fetchBooks);
searchBtn.addEventListener("click", fetchBooks);
yearFilter.addEventListener("change", fetchBooks);
printType.addEventListener("change", fetchBooks);
sortBy.addEventListener("change", fetchBooks);

async function fetchBooks() {
    const query = searchInput.value.trim();
    if (!query) {
        resultsDiv.innerHTML = "";
        return;
    }

    let url = `https://www.googleapis.com/books/v1/volumes?q=${query}`;

    if (printType.value) {
        url += `&printType=${printType.value}`;
    }

    const res = await fetch(url);
    const data = await res.json();

    if (!data.items) {
        resultsDiv.innerHTML = "<p>No books found.</p>";
        return;
    }

    let books = data.items.map(item => {
        const info = item.volumeInfo;
        return {
            title: info.title || "No Title",
            authors: info.authors ? info.authors.join(", ") : "Unknown",
            date: info.publishedDate || "N/A",
            year: info.publishedDate ? parseInt(info.publishedDate.substring(0,4)) : null,
            thumbnail: info.imageLinks ? info.imageLinks.thumbnail : ""
        };
    });

    // Filter by year
    if (yearFilter.value === "before") {
        books = books.filter(book => book.year && book.year < 2010);
    }
    if (yearFilter.value === "after") {
        books = books.filter(book => book.year && book.year > 2010);
    }

    // Sorting
    if (sortBy.value === "title") {
        books.sort((a, b) => a.title.localeCompare(b.title));
    }
    if (sortBy.value === "date") {
        books.sort((a, b) => (b.year || 0) - (a.year || 0));
    }

    displayBooks(books);
}

function displayBooks(books) {
    resultsDiv.innerHTML = books.map(book => `
        <div class="book">
            <img src="${book.thumbnail || 'https://via.placeholder.com/120'}" alt="Cover">
            <h3>${book.title}</h3>
            <p><strong>Author:</strong> ${book.authors}</p>
            <p><strong>Published:</strong> ${book.date}</p>
        </div>
    `).join("");
}


