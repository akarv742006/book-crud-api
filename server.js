const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let books = [
  { id: 1, title: "Book One", author: "Author A" },
  { id: 2, title: "Book Two", author: "Author B" }
];

// ✅ Root route
app.get('/', (req, res) => {
  res.send('📚 Welcome to the Book API! Use /books to access the API.');
});

// 🔍 Get all books
app.get('/books', (req, res) => {
  res.json(books);
});

// ➕ Add a new book
app.post('/books', (req, res) => {
  const newBook = req.body;
  books.push(newBook);
  res.status(201).json(newBook);
});

// ✏️ Update a book by ID
app.put('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const updatedBook = req.body;

  const index = books.findIndex(book => book.id === bookId);
  if (index !== -1) {
    books[index] = { id: bookId, ...updatedBook };
    res.json(books[index]);
  } else {
    res.status(404).json({ message: "Book not found" });
  }
});

// ❌ Delete a book by ID
app.delete('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const index = books.findIndex(book => book.id === bookId);

  if (index !== -1) {
    const deletedBook = books.splice(index, 1);
    res.json(deletedBook[0]);
  } else {
    res.status(404).json({ message: "Book not found" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
