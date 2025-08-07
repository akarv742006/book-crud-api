fetch('/api/books')
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById('book-list');
    list.innerHTML = '';
    data.forEach(book => {
      const li = document.createElement('li');
      li.textContent = `${book.title} by ${book.author}`;
      list.appendChild(li);
    });
  })
  .catch(err => {
    document.getElementById('book-list').innerHTML = 'Error loading books.';
    console.error(err);
  });
