/*
Завдання 2(task2.js)
Створіть функцію, яка приймає рядок тексту та кількість секунд, а також колбек-функцію(яку ми створили у файлі task1.js - тобто імпортуємо її).
Ця функція повинна викликати колбек через передану кількість секунд і передати в нього переданий текст як аргумент. 
Тобто, функція-колбек повинна робити якусь дію із переданим в неї рядком
*/
import { dotCounter } from "./function.js"

function fff(string, delay, callback) {
    setTimeout(function () {
        const data = string
        callback(data)
    }, delay)
}

fff("Ingram T.N., Laforge R.W., Avila R.A. and Schwepker C.H. Jr. and Williams M.R. (2001)", 2000, dotCounter)                    
