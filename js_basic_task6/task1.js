/*
Завдання 1(task1.js)
Використовуючи рекурсію, напишіть функцію, яка приймає два параметри - start та finish. За допомогою рекурсії, виведіть всі числа від start до finish.

Приклад використання:

printIntervalRec(10,15);
Результат:

10
11
12
13
14
15
*/
function printIntervalRec(start, finish) {
    if (finish > start) {
        console.log(start)
        return printIntervalRec(start + 1, finish)
    } else {
        return finish
    }
}
console.log(printIntervalRec(3, 9))
