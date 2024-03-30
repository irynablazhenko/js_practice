/*
Завдання 1(task1.js)
За допомогою setTimeout створіть функцію, яка приймає рядок, та кількість секунд.
Функція повинна виводити переданий текст через передану кількість секунд
*/
//фукція, яка виводить вхідний текст  через вказану затримку
export function outputDelayedText(string, delay) {
    setTimeout(function () {
        console.log(string)
    }, delay);
}
outputDelayedText("This text is displayed after some delay", 1000)