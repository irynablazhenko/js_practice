/*
Завдання 3(task3.js)
Використовуючи fetch та async await зробіть 2 функції, які використовують сайт https://jsonplaceholder.typicode.com/.
Перша функція - приймає айді посту та виводить його body.
Друга функція - за вашим бажанням.
Використовуйте документацію з сайту https://jsonplaceholder.typicode.com/
*/
const url = "https://jsonplaceholder.typicode.com/posts/"

//функція повертає з результату запиту значення параметра body
async function getBodyByPostId(postId) {
    const response = await fetch(url + postId)
    const result = await response.json()
    return result.body
}

getBodyByPostId(2)
    .then(json => console.log(json))

//функція створює новий пост
async function createPost(title, body, userId) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: title,
            body: body,
            userId: userId
        })
    })
    const result = await response.json()
    return result
}
createPost("new title", "new body", 25)
    .then((json) => console.log(json));