/*
Завдання 1(task1.js):
Створіть програму, яка приймає рядок від користувача (як змінну) та замінює всі голосні літери на "*" у цьому рядку. Виведіть отриманий рядок(із змінами) у консоль.
*/

let userString = 'some random string'
let vowels = ['A', 'E', 'I', 'O', 'U', 'Y', 'a', 'e', 'i', 'o', 'u', 'y']
let resultString = ''
for (let i = 0; i < userString.length; i++) {
    if (vowels.includes(userString[i])) {
        resultString += '*'
    } else {
        resultString += userString[i]
    }
}
console.log(`Нова стрічка з "*" замість голосних : ${resultString}`)