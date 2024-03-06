/*
Завдання 2(task2.js)
Є масив рядків

const strings = ["String one", "String two", "string three"]
За допомогою циклу for of пройтись по всім елементам та вивести у консоль всі рядки великими буквами. Приклад:

STRING ONE
STRING TWO
STRING THREE
*/
const strings = ["String one", "String two", "string three"]
for (const string of strings) {
    console.log(string.toUpperCase())
}