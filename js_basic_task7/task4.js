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
        } else {
            throw new Error(`There is no book with the bookId = ${bookId}`)
        }
    },
    setIsRent(bookId, isRent) {
        if (!this.books.some(item => item.bookId === bookId)) {
            return (`The book with the bookId = ${bookId} doesn't exist`)
        } else {
            this.books.isRent = isRent
        }
    },
    rentBook(bookId) {
        if (!this.books.some(item => item.bookId === bookId)) {
            return (`The book with the bookId = ${bookId} doesn't exist`)
        } else if (this.books.isRent) {
            return (`The book with the bookId = ${bookId} is in rent`)
        } else {
            return (`The book with the bookId = ${bookId} can be rent`)
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

try {
    library.addBook(25, 'Володимир Саркісян', 2024, 0)                                 // wrong name type
} catch (error) {
    console.log(`Error happen: ${error.message}`)
}
try {
    library.addBook('Книга Фанатка. Біполярна історія', 'Христина Морозова', 2024, 1)  // good item
} catch (error) {
    console.log(`Error happen: ${error.message}`)
}
try {
    library.addBook('Книга Переможці', 'Бакман Фредрік', 2024, 1);                      // duplicated id
} catch (error) {
    console.log(`Error happen: ${error.message}`)
}
try {
    library.addBook('книга 1', 23, 2024, 2)                                             // wrong author type, should be only string
} catch (error) {
    console.log(`Error happen: ${error.message}`)
}
try {
    library.addBook('книга 2', 'автор книги 2', -5, 3)                                  // wrong year, should be greater than 0
} catch (error) {
    console.log(`Error happen: ${error.message}`)
}
try {
    library.addBook('книга 3', 'автор книги 3', '-5', 4)                                // wrong year, should be number
} catch (error) {
    console.log(`Error happen: ${error.message}`)
}
try {
    library.addBook('книга 4', 'автор книги 4', 5, 'dv5')                               // good item
} catch (error) {
    console.log(`Error happen: ${error.message}`)
}
try {
    library.addBook('книга 5', 'автор книги 5', 1, 6)                                   // good item
} catch (error) {
    console.log(`Error happen: ${error.message}`)
}


library.printAllBooks();
try {
    library.deleteBook(634)
} catch (error) {
    console.log(`Error happen: ${error.message}`)
}
try {
    library.deleteBook('dv5')
} catch (error) {
    console.log(`Error happen: ${error.message}`)
}
library.printAllBooks();
console.log(library.rentBook(6))    // can be rent
library.setIsRent(6, true)           // change isRent status to true
console.log(library.rentBook(6))    // is in rent
console.log(library.rentBook(36))   // doesn't exist