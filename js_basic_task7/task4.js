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
        if (this.books.some(item => item.bookId === bookId)) { // bookId can be number and string
            console.log(`ID is duplicated. The book: ${bookName}, ${bookAuthor}, ${bookYear}, ${bookId} will be skipped`);
        }
        else {
            if (typeof bookName != 'string' ||typeof bookAuthor != 'string' || typeof bookYear != 'number'
        || bookName===''|| bookAuthor==='' || bookYear<=0 ||  bookId ===''      ) {
                console.log(`At least one parameter is wrong. The book: ${bookName}, ${bookAuthor}, ${bookYear}, ${bookId} will be skipped`)
            } else {
                this.books.push({ bookName, bookAuthor, bookYear, bookId })
            }
        }
    },
    printBookInfo(bookId) {
        console.log(`Book with id ${bookId}`);
        console.log(this.books.filter(item => item.bookId === bookId))
    },
    printAllBooks() {
        console.log(`All books:`);
        console.log(this.books);
    }
}

library.addBook(25, "Володимир Саркісян", 2024, 0);                                 // wrong name type
library.addBook("Книга Фанатка. Біполярна історія", "Христина Морозова", 2024, 1);  // good item
library.addBook("Книга Переможці", "Бакман Фредрік", 2024, 1);                      // duplicated id
library.addBook("книга 1", 23, 2024, 2);                                            // wrong author type, should be only string
library.addBook("книга 2", "автор книги 2", -5, 3);                                 // wrong year, should be greater than 0
library.addBook("книга 3", "автор книги 3", "-5", 4);                               // good item
library.addBook("книга 4", "автор книги 4", 5, "dv5");                              // good item
library.addBook("книга 5", "автор книги 5", 1, 6);                                  // good item

console.log(library.books);
library.printBookInfo('dv5');
library.printAllBooks();