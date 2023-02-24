function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        read = this.read ? 'already read' : 'not read yet'
        return `${this.title} by ${this.author}, ${pages} pages, ${read}`
    }
}

const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', 295, false);
console.log(theHobbit.info());