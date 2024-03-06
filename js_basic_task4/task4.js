/*
Завдання 4(task4.js)
Є масив рядків імен

const names = ["John", "Fernando", "Alexandra", "Anatolii", "Arina", "Elon"]
 Використовуючи .find(), виведіть перше ім'я, з довжиною більше 6 символів

*/
const names = ["John", "Fernando", "Alexandra", "Anatolii", "Arina", "Elon"]
console.log(names.find(foundName => foundName.length > 6))