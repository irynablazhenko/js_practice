/*
Завдання 2(task2.js)
Використовуючи замикання, створіть функцію divider, яка приймає дільник(число, на яке треба ділити) та повертає іншу функцію, яка у свою чергу 
приймає ділене(число, яке потрібно поділити на дільник) та повертає результат ділення

Приклад використання:

const divideByFive = divider(5);
console.log(divideByFive(10)); // Виведе 2 (10/5=2)
*/
function divider(divisor) {
    if (divisor === 0) {
        throw new Error("Dividing by zero error")
    } else {
        return function (shared) { 
            return shared / divisor }
    }
}
console.log(divider(3)(10))