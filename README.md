# 📚 Bookstore CRUD API with Node.js and Express

This is a simple and clean **CRUD (Create, Read, Update, Delete)** API built using **Node.js** and **Express**. It allows you to manage a list of books with basic operations like adding, retrieving, updating, and deleting book records.

## 🚀 Features

- ✅ Create a new book
- ✅ View all books
- ✅ Update book details
- ✅ Delete a book
- ✅ JSON-based RESTful API
- ✅ Clean and simple project structure

---

## 🛠️ Technologies Used

- **Node.js**
- **Express.js**
- **VS Code** (for development)

---

## 📁 Project Structure

project-folder/
├── package.json
├── package-lock.json
├── server.js
└── README.md
## 📦 Installation & Running the API Locally

Follow these steps to set up and run the project on your local machine:

### 1. Clone the Repository
```bash
git clone https://github.com/akarv742006/bookstore-api.git
cd bookstore-api
2. Install Dependencies
npm install
3. Start the Server
node server.js
## 🧪 How to Test the API (Get Output)

Once your server is running at `http://localhost:3000`, you can test the API in the following ways:

### 1. Using a Tool like Postman or Thunder Client (VS Code Extension)

- **GET** `http://localhost:3000/books` → See all books
- **POST** `http://localhost:3000/books` → Add a new book (use JSON in Body)
- **PUT** `http://localhost:3000/books/:id` → Update book by ID
- **DELETE** `http://localhost:3000/books/:id` → Delete book by ID

### Example:

#### ✅ GET All Books
C: CREATE (POST)
🔄 Add a new book to the list
Invoke-RestMethod -Uri "http://localhost:3000/books" `
  -Method POST `
  -Body '{"id":3,"title":"Book Three","author":"Author Three"}' `
  -ContentType "application/json"
 R: READ (GET)
📖 Get all books
curl http://localhost:3000/books
U: UPDATE (PUT)
✏️ Update the book with ID 2
Invoke-RestMethod -Uri "http://localhost:3000/books/2" `
  -Method PUT `
  -Body '{"title":"Updated Book Two","author":"Updated Author Two"}' `
  -ContentType "application/json"
D: DELETE (DELETE)
❌ Delete the book with ID 1
Invoke-RestMethod -Uri "http://localhost:3000/books/1" -Method DELETE
Final Result (GET)
📋 View the updated list
curl http://localhost:3000/books




