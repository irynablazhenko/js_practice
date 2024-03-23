/*
Завдання 4(task4.js) * - додаткове, необов'язкове:
Додати покращення для об'єкта Library:

Метод addBook:
перевіряє чи немає ще елементу із таким ID,
перевіряє, що параметри містять адекватні значення(не пусті, назва - рядок, рік випуску - число і так далі), у разі проблеми - повертає помилку
Додати новий метод deleteBook, який приймає параметр bookId, та перевіряє чи є щось із таким айді. Якщо так - видаляє, якщо ні - повертає помилку
Додати метод rentBook, який дає можливість брати книжку в прокат.
Він приймає параметр bookId та перевіряє чи є така книжка взагалі та чи не взята вона в прокат. 
Якщо обидві перевірки проходять - повернути меседж, що книжка в прокаті, якщо ні - повернути помилку.
*/
const library = {
    books: [],
    addBook(bookName, bookAuthor, bookYear, bookId) {
        if (this.books.some(item => item.bookId === bookId)) {              // bookId can be number and string
            throw new Error(`ID is duplicated. The book: ${bookName}, ${bookAuthor}, ${bookYear}, ${bookId} will be skipped`);
        }
        else {
            if (typeof bookName != 'string' || typeof bookAuthor != 'string' || typeof bookYear != 'number'
                || bookName === '' || bookAuthor === '' || bookYear <= 0 || bookId === '') {
                throw new Error(`At least one parameter is wrong. The book: [type ${typeof bookName}: ${bookName}, type ${typeof bookAuthor}: ${bookAuthor}, type ${typeof bookYear}: ${bookYear}, ${bookId}] will be skipped`)
            } else {
                this.books.push({ bookName, bookAuthor, bookYear, bookId })
            }
        }
    },
    deleteBook(bookId) {
        if (this.books.some(item => item.bookId === bookId)) {
            this.books.splice(this.books.some(item => item.bookId === bookId), 1)
            return `The book with the bookId = ${bookId} is deleted`
        } else {
            throw new Error(`There is no book with the bookId = ${bookId}`)
        }
    },
    setIsRent(bookId, isRent) {
        if (!this.books.some(item => item.bookId === bookId)) {
            throw new Error(`The book with the bookId = ${bookId} doesn't exist`)
        } else {
            for (let i = 0; i < this.books.length; i++) {
                if (this.books[i].bookId === bookId) {
                    this.books[i].isRent = isRent
                    console.log(`The book with the bookId = ${bookId} set in rent`)
                }
            }
        }
    },
    rentBook(bookId) {
        if (!this.books.some(item => item.bookId === bookId)) {
            return (`The book with the bookId = ${bookId} doesn't exist`)
        } else
            for (let i = 0; i < this.books.length; i++) {
                if (this.books[i].bookId === bookId) {
                    if (this.books[i].isRent === true) {
                        return (`The book with the bookId = ${bookId} is in rent`)
                    }
                    else {
                        return (`The book with the bookId = ${bookId} can be rent`)
                    }
                }
            }
    },
    printBookInfo(bookId) {
        console.log(`Book with id ${bookId}`);
        console.log(this.books.filter(item => item.bookId === bookId))
    },
    printAllBooks() {
        console.log(`All books:`)
        console.log(this.books)
    }
}
// to skip writing all times try...catch we will use function newTryCatch and method .bind to sent the arguments of inner function when calling the function newTryCatch
function newTryCatch(func, ...args) {
    try {
        func(...args);
    } catch (err) {
        console.error('Error calling function', err.message);
    }
}

newTryCatch(library.addBook.bind(library), 25, 'Володимир Саркісян', 2024, 0)                                // wrong name type
newTryCatch(library.addBook.bind(library), 'Книга Фанатка. Біполярна історія', 'Христина Морозова', 2024, 1) // good item
newTryCatch(library.addBook.bind(library), 'Книга Переможці', 'Бакман Фредрік', 2024, 1)                     // duplicated id
newTryCatch(library.addBook.bind(library), 'книга 1', 23, 2024, 2)                                           // wrong author type, should be only string
newTryCatch(library.addBook.bind(library), 'книга 2', 'автор книги 2', -5, 3)                                // wrong year, should be greater than 0
newTryCatch(library.addBook.bind(library), 'книга 3', 'автор книги 3', '-5', 4)                              // wrong year, should be number
newTryCatch(library.addBook.bind(library), 'книга 4', 'автор книги 4', 5, 'dv5')                             // good item
newTryCatch(library.addBook.bind(library), 'книга 5', 'автор книги 5', 1, 6)                                 // good item
newTryCatch(library.addBook.bind(library), 'книга 11', 'автор книги 11', 1, 11)
newTryCatch(library.addBook.bind(library), 'книга 12', 'автор книги 12', 1, 12)
newTryCatch(library.addBook.bind(library), 'книга 13', 'автор книги 13', 1, 13)
newTryCatch(library.addBook.bind(library), 'книга 14', 'автор книги 14', 1, 14)
library.printAllBooks()

newTryCatch(library.deleteBook.bind(library), 634)
newTryCatch(library.deleteBook.bind(library), 'dv5')

console.log(library.rentBook(6))                        // can be rent
newTryCatch(library.setIsRent.bind(library), 6, true)    // change isRent status to true
console.log(library.rentBook(6))                        // is in rent
console.log(library.rentBook(1))                        // can be rent
console.log(library.rentBook(36))                       // doesn't exist