//write a function to manage a book shelf
function manageBookShelf(bookShelf, action, book) {
    if(action==="list"){
       bookShelf.length;return bookShelf;
    }
    else if(action==="add"){
       bookShelf.push(book);return bookShelf;
    }
    else if(action==="remove"){
        bookShelf.shift();return bookShelf;
    }
}
console.log(manageBookShelf(["book1", "book2", "book3"], "remove", "book4"));