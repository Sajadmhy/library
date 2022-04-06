let myLibrary = [
    {
        title: "Book Title 1",
        author: "Sam Smith",
        pages: "421",
        isRead: "yes",
    },
    {
        title: "Book Title 2",
        author: "Harry Potter",
        pages: "123",
        isRead: "no",
    },
    {
        title: "Book Title 3",
        author: "The Rock",
        pages: "542",
        isRead: "yes",
    }
];

const   form = document.getElementsByTagName("form")[0];
const   title = document.getElementById("title");
const   author = document.getElementById("author");
const   pages = document.getElementById("pages");
const   isRead = function() {
            if (document.getElementById("yes").checked === true) {
                return 'yes';
            } else {
                return 'no';
        }};
const table = document.getElementById("table");


title.addEventListener("input", function(event) {
    title.setCustomValidity("");
    title.checkValidity();
});

title.addEventListener('invalid', function() {
    if (title.value === "") {
        title.setCustomValidity("Enter the title!");
    } else {
        title.setCustomValidity("Title is not valid. Try again!");
    }
});

author.addEventListener("input", function(event) {
    author.setCustomValidity("");
    author.checkValidity();
});

author.addEventListener('invalid', function() {
    if (author.value === "") {
        author.setCustomValidity("Enter the author!");
        author.reportValidity();
    } else {
        author.setCustomValidity("Author name is not valid. Try again!");
    }
});

form.addEventListener("submit", function(event) {
    if (!title.validity.valid || !author.validity.valid) {
        event.preventDefault();
    }
});

class Book {
    constructor(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}};


// function Book(title, author, pages, isRead) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.isRead = isRead;
// };

function createBook() {
    if (title.value === "" || author.value === "" || pages.value === ""){
        return (alert(`Please enter your book's data`));
    } else {
        let newBook = new Book (
            title.value,
            author.value,
            pages.value,
            isRead()
        );
        myLibrary.push(newBook);
        return newBook;
    }
};

function displayBook() {
    table.textContent= '';
    for (let i = 0; i < myLibrary.length; i++) {
        const bookCard =  document.createElement('div');
        bookCard.setAttribute('class', 'book-card');
        bookCard.setAttribute('data-index', `${i}`);
        table.append(bookCard);

        const bookTitle = document.createElement('p');
		bookTitle.textContent = `Title: ${myLibrary[i].title}`;
		bookCard.append(bookTitle);

		const bookAuthor = document.createElement('p');
		bookAuthor.textContent = `Author: ${myLibrary[i].author}`;
		bookCard.append(bookAuthor);

		const bookPages = document.createElement('p');
		bookPages.textContent = `Pages: ${myLibrary[i].pages}`;
		bookCard.append(bookPages);

		const bookRead = document.createElement('p');
		bookRead.textContent = `Read?: ${myLibrary[i].isRead}`;
		bookCard.append(bookRead);

		const readBtn = document.createElement('button');
		readBtn.setAttribute('class', 'read-status-btn');
		readBtn.textContent = `Read?`;
		bookCard.append(readBtn);

		const deleteBtn = document.createElement('button');
		deleteBtn.setAttribute('class', 'delete-book-btn');
		deleteBtn.textContent = `Remove`;
		bookCard.append(deleteBtn);
    }

    const bookReadBtn = document.querySelectorAll('.read-status-btn');

	const bookReadBtnArr = [...bookReadBtn].forEach((btn) => {
		btn.addEventListener('click', readCheck);
	});

	function readCheck(e) {
		const indexNum = e.target.parentElement.dataset.index;
		readStatusChange(indexNum);
	}

	const bookDeleteBtn = document.querySelectorAll('.delete-book-btn');

	const bookDeleteBtnArr = [...bookDeleteBtn].forEach((btn) => {
		btn.addEventListener('click', deleteCheck);
	});

	function deleteCheck(e) {
		const indexNum = e.target.parentElement.dataset.index;
		deleteBook(indexNum);
	}

}


function clearDisplay() {
    table.textContent = '';
}

function deleteBook(i) {
	myLibrary.splice(i, 1);
	clearDisplay();
    displayBook();
}

function readStatusChange(i) {
	if (myLibrary[i].isRead === 'yes') {
		myLibrary[i].isRead = 'no';
	} else if (myLibrary[i].isRead === 'no') {
		myLibrary[i].isRead = 'yes';
	}
	clearDisplay();
	displayBook();
}

function addBookToLibrary() {
    createBook();
    clearDisplay();
    displayBook();
};




function openForm() {
        document.getElementById("myForm").style.display = "block";
    };  
function closeForm() {
        document.getElementById("myForm").style.display = "none";
    };

displayBook();
