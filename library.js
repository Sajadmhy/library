let myLibrary = ['h' , 'o' , 'b'];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
};

function addBookToLibrary() {
    newBook = prompt ("Enter a book name" , "");
    myLibrary.push(newBook);
};


// write a function that loops through the array and display...
// each book on the page.
function displayBook() {
    for (let i = 0 ; i < myLibrary.length; i++){
        const para = document.createElement("P");
        const node = document.createTextNode(myLibrary[i]);
        para.appendChild(node);
        document.getElementById('table').appendChild(para);
    }};

