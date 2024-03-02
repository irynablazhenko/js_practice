/*
Завдання 2(task2.js):
Створіть програму, яка приймає такі змінні: базовий рядок та символ, який потрібно замінити(як змінні), 
а потім замінює вказаний символ у базовому рядку на "*" та записує у новий рядок, який потім виводить у консоль.
*/

let baseString ='The entire Pro Git book, written by Scott Chacon and Ben Straub and published by Apress, is available here.'
let userCharacter = 'e'

let resultString = ''
for (let i = 0; i < baseString.length; i++) {
    if (baseString[i].includes(userCharacter)) {
        resultString += '*'
    } else resultString += baseString[i]
}
console.log(`Нова стрічка з "*" замість символа "${userCharacter}" : ${resultString}`)