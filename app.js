// Book Constructor
function Book(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI Constructor
function UI(){}

// Add book to list
UI.prototype.addBookToList = function(book){
    const list = document.getElementById('book-list');

    // Create tr (table row) element
    const row = document.createElement('tr');

    // Insert columns
    row.innerHTML = `<td>${book.title}</td>
                     <td>${book.author}</td>
                     <td>${book.isbn}</td>
                     <td><a href="#" class="delete">X</a></td>`;

    list.appendChild(row);
}

// Show alert
UI.prototype.showAlert = function(message, className){
    // Create Div
    const div = document.createElement('div');
    // Add classes
    div.className = `alert ${className}`;
    // Add text node
    div.appendChild(document.createTextNode(message));
    // Get parent
    const container = document.querySelector('.container');
    // Get form 
    const form = document.querySelector('#book-form');
    // Insert alert
    container.insertBefore(div, form);

    // Timeout
    setTimeout(function(){
        document.querySelector('.alert').remove();
    }, 2000);

}


// Clear fields
UI.prototype.clearFields = function(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

//Event Listeners
document.getElementById('book-form').addEventListener('submit', function(e){
    // Get form values
    const title = document.getElementById('title').value,
          author = document.getElementById('author').value,
          isbn = document.getElementById('isbn').value;  
    
    // Instantiate book
    const book = new Book(title, author, isbn);

    // Instantiate UI
    const ui = new UI();

    if(title === '' || author === '' || isbn === ''){
        // Error alert
    ui.showAlert('Please fill in all fields', 'error');
    } else {

    // Add book to list
    ui.addBookToList(book);

    // Show success
    ui.showAlert('Book added!', 'success');

    // Clear fields
    ui.clearFields();
    }

    e.preventDefault();
})