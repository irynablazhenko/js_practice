/*
Завдання 4(task4.js)* - додаткове, необов'язкове:
За власним бажанням додайте обробку помилок за допомогою try-catch до таску #3
----------------------------------------------------------------------------------
Завдання 3(task3.js)
Напишіть функцію, яка приймає як параметри два числа та рядок operator(+,-,/,*). Поверніть результат операції. 
За допомогою if-else зробіть перевірки на корректність передаваємих даних та викидайте помилку(throw new Error() ), якщо дані невірні:

Якщо операція ділення("/"), то другий параметр не може бути 0
Для всіх операцій перший та другий параметр повинні бути числами
Третій параметр повинен бути рядком та дорівнювати одному із 4 значень : +-/*
Кількість аргументів не повинна бути більше 3-х
Інші перевірки по бажанню

Приклад використання:

Виклик функції: calculate(100,5,"*");
Вивід: 100 помножити на 5 = 500
______
Виклик функції: calculate(100,5,"string");
Вивід: Error: Третій параметр повинен бути +,-,/ або *
______
Виклик функції: calculate(10,0,"/");
Вивід: Error: Коли операція ділення, другий параметр повинен не дорівнювати 0
*/
function calculate(num1, num2, operator) {
    let result
    let operators = ['/', '*', '+', '-']
    if (arguments.length != 3) {
        throw new Error("Wrong arguments count. Please enter 3 arguments.")
    } else if (!operators.includes(operator)) {
        throw new Error("Wrong operator. Operator can be only: /, *, + or -")
    } else if (typeof num1 === 'number' && !isNaN(num1) && typeof num2 === 'number' && !isNaN(num2)) {
        if (operator === '/') {
            if (num2 === 0) {
                throw new Error("Dividing by zero error")
            } else {
                result = num1 / num2
            }
        } else if (operator === '*') {
            result = num1 * num2
        } else if (operator === '+') {
            result = num1 + num2
        } else {
            result = num1 - num2
        }
    } else { throw new Error("Wrong arguments. First 2 arguments should be numbers.") }
    return `${num1} ${operator} ${num2} = ${result}`
}

try {
    console.log(calculate(10, 0, "-", 6))
} catch (error) {
    console.log(`Error happen: ${error.message}`)
}
