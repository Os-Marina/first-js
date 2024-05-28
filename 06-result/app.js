//JSON
//можно переводить из JSON в объект и из объекта в JSON

// const car = {
//     model: 'Tesla',
//     year: 2023,
// }

// const json = JSON.stringify(car)
// console.log(json);

// const parsed = JSON.parse(json)
// console.log(parsed);

// const list = document.getElementById('list')
//можем использовать другую функуию, аналогичной getElementById

const list = document.querySelector('#list') //универсальый способ получения эементов из дом-дерево
const filter = document.querySelector('#filter')

let USERS = []

filter.addEventListener('input', (event) => {
    const value = event.target.value.toLowerCase()
    const filteredUsers = USERS.filter((user) => user.name.toLowerCase().includes(value))
    render (filteredUsers)
})

async function start() {
    list.innerHTML = 'Loading...'
    try{
    //для того чтобы сделать ассинхронный запрос на сервер и получить по юрл какие то данные используем современный метод:
    //есть еще get post put patch delete options
        const resp = await fetch('https://jsonplaceholder.typicode.com/users'
        // method: 'GET'
        //по умолчанию метод get задается
    ) 
    //чтобы получить пользователей необходимо их распарсить
        const data = await resp.json()
        setTimeout(()=> {
            USERS = data
            render(data)
        }, 2000)
    // console.log(data);
        // render(data)
    } catch (err) {
        list.style.color = 'red'
        list.innerHTML = err.message
    }
}

function render(user = []) {
    if(user.length ===0 ){
        list.innerHTML = 'No matched users!'
    } else{
        const html = user.map(toHTML).join('')
        list.innerHTML = html
    }
    
}

function toHTML(user){
    return `
        <li class="list-group-item">${user.name}</li>
    `
}
start()