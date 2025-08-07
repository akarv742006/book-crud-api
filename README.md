# Book List REST API – Task 3 (Elevate Lab)

This project is a simple RESTful API built using **Node.js** and **Express.js** that manages a list of books. It demonstrates core CRUD (Create, Read, Update, Delete) operations without using a database. All data is stored temporarily in memory.

---

## Features

- Add a new book
- View all books
- Update existing book details
- Delete a book by ID

---

## Technologies Used

- Node.js
- Express.js
- JavaScript (ES6)

---

## Folder Structure

task-3/
│
├── server.js # Main server file
├── package.json # Project metadata and dependencies

yaml
Copy
Edit

---

## How to Run the Project

Follow these steps to run the Book List API locally:

### 1. Clone the repository

```bash
git clone https://github.com/akarv742006/book-list-api.git
cd book-list-api
2. Install dependencies
bash
Copy
Edit
npm install
3. Start the server
bash
Copy
Edit
node server.js
The API will be running at:
http://localhost:3000

API Endpoints
Get all books
Request:

http
Copy
Edit
GET /books
Response:

json
Copy
Edit
[
  {
    "id": 1,
    "title": "Book One",
    "author": "Author One"
  },
  ...
]
Add a new book
Request:

http
Copy
Edit
POST /books
Content-Type: application/json
Body:

json
Copy
Edit
{
  "id": 3,
  "title": "Book Three",
  "author": "Author Three"
}
Update a book
Request:

http
Copy
Edit
PUT /books/:id
Content-Type: application/json
Example:

http
Copy
Edit
PUT /books/2
Body:

json
Copy
Edit
{
  "title": "Updated Book Two",
  "author": "Updated Author Two"
}
Delete a book
Request:

http
Copy
Edit
DELETE /books/:id
Example:

http
Copy
Edit
DELETE /books/1
Example cURL Commands
Add a new book:
bash
Copy
Edit
curl -X POST http://localhost:3000/books \
-H "Content-Type: application/json" \
-d "{\"id\":4, \"title\":\"Book Four\", \"author\":\"Author Four\"}"
Update a book:
bash
Copy
Edit
curl -X PUT http://localhost:3000/books/4 \
-H "Content-Type: application/json" \
-d "{\"title\":\"Updated Book Four\", \"author\":\"Updated Author Four\"}"
Delete a book:
bash
Copy
Edit
curl -X DELETE http://localhost:3000/books/4
Important Notes
Data is not persistent; it will reset on server restart.

The API does not use any database for storage.

Built as part of Task 3 submission for Elevate Lab.

Author
Akash
GitHub: akarv742006