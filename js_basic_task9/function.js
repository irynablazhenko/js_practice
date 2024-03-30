//Створіть функцію в окремому файлі function.js, яка приймає рядок і робить із ним будь-які дії.

//функція для підрахунку кількості крапок у стрічці
export function dotCounter(string) {
    let count = 0
    for (let i = 0; i < string.length; i++) {
        if (string[i].includes(".")) {
            count++
        }
    }
    console.log(`There are ${count} dots in the string: "${string}" `)
}