/*
Завдання 3(task3.js)
Є масив ємейлів

const emails = ["example1@yahoo.com", "myemail@mail.com", "trueemail@gmail.com"]
Використовуючи .filter(), запишіть у новий масив тільки ємейли, які містять 'gmail.com'. Виведіть новий відфільтрований масив.
*/
const emails = ["example1@yahoo.com", "myemail@mail.com", "trueemail@gmail.com", "mygmail@gmail.com"]
const filteredEmails = emails.filter(email => email.includes('gmail.com'))
console.log(filteredEmails)
