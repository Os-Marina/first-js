/*Дата и время 
// console.log(new Date()); //с такой конструкцией можно получать текущую дату и время

const now = new Date()
//передаем количество милисекунд, которые прошли от первого января 1970 года
const start = new Date(1000*60*60*24*365)

const date = new Date (2024, 4, 27, 12, 42, 12)
//1000*60*60 - это час
//(1000*60*60*24) след.день
//(1000*60*60*24*365) - след год
// console.log(date);

// console.log(now.getSeconds());
//отчет времени в JS от 01 января 1970 года
//set - позволяет задать вручную единицу для даты. Главное, чтобы объект был от new Data

// now.setFullYear(2023)
// console.log(now);

console.log(now.toDateString()); //показывает только дату
console.log(now.toTimeString()); //показывает только время
console.log(now.toLocaleDateString()); //стандартный формал записи даты
console.log(now.toLocaleTimeString());
*/
let mode = 'date'
const now = new Date()

const output = document.getElementById('output')
const fullBtn = document.getElementById('full')
const dateBtn = document.getElementById('date')
const timeBtn = document.getElementById('time')

function bindMode(name) {
    return function() {
        mode = name 
        update()
    }
}

fullBtn.onclick = bindMode('full')
dateBtn.onclick = bindMode('date')
timeBtn.onclick = bindMode('time')



// setInterval(update, 10)//для отображения миллисекунд
setInterval(update, 10)
update()

function update() {
    output.textContent = format(mode)
}

//когда мы описываем функцию, которая зависит только от входящих параметров, это называется Pure Function
function format(formatMode) {
    const now = new Date()
    switch (formatMode) {
        // case 'time' : return now.toLocaleTimeString() + '.' + now.getMilliseconds()//для отображения миллисекунд
        case 'time' : return now.toLocaleTimeString() 
        case 'date' : return now.toLocaleDateString()
        case 'full' : return now.toLocaleDateString() + ' ' + now.toLocaleTimeString()
        default : return now.toLocaleTimeString()

    }

}