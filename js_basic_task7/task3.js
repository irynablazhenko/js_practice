/*
Завдання 3(task3.js)
Створити об'єкт Library, який має:

Масив books [] - масив, де містяться об'єкти.
Метод addBook - метод, який приймає параметри bookName, bookAuthor, bookYear та bookId та додає новий об'єкт із цими параметрами до масиву books
Метод printBookInfo - метод, який приймає параметр bookId та виводить всю інформацію(ім'я, автор, рік) книжки з таким айді
Метод printAllBooks - метод, який виводить інформацію про всі книжки в наявності(їх ім'я, авторів, роки та айді)
Потренуватись додавати нові книжки та викликати інші методи об'єкта Library
*/
const Library = {
    books: [],
    addBook(bookName, bookAuthor, bookYear, bookId) {
        this.books.push({ bookName, bookAuthor, bookYear, bookId })
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

Library.addBook("Убивче зілля. Історії (не)вигаданих отрут", "Володимир Саркісян", 2024, 1);
Library.addBook("Книга Фанатка. Біполярна історія", "Христина Морозова", 2024, 2);
Library.addBook("Книга Переможці", "Бакман Фредрік", 2024, 3);

console.log(Library.books);
Library.printBookInfo(2);
Library.printAllBooks();