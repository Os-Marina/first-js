/* //Массив - это коллекция каких-либо элементов. Перевенная, в которой хранятся другие переменные
//   ! Для массивов лучше использовать тип переменной - const

Определение массива:

const array = [1, 2, 3, 5, 20, 42]
// const arrayString = ['a', 'b', 'c']
// const array = new Array (1, 2, 3, 5, 20, 42) - излишний способ, в основном используют квадратные скобки
*/
/* Вызов массива

// console.log(array.length) - длина массива
// console.log(array[5-3])
// console.log(array[10])
// console.log(array[array.length-1]) - последний элемент массива


array[0] = 'Hello!'
console.log(array)

// array[array.length] = 'becon'  - добавление элемента в массив, не рекоммендуется использовать
[массив].push - функция у массива, которая добавляет новый элемент в конец списка
*/
// console.log(inputElement.value)

// function createElementOfList() {
//     const name = title.value
// }
/* ковычки - " `` " специальный синтаксис в JS, который позволяет писать многострочный код*/
/*выражение "${}" позволяет передавать программное значение внутрь какого либо элемента HTML. Интерпертирует как переменную" */
/*выражение "innerHTML" позволяет переписывать данные HTML. Он перезатирает значения и "обновляет данные в ней" */
/*событие, которое происходит по надажатию на элемент*/
/*insertAdjacentHTML принимает два парметра, 1 - куда необходимо положить данный html, 2 - вторым параметром мы передаем строчку    */

/*notes.splice изменяет содержимое массива, удаляя существующие элементы и/или добавляя новые*/


/*
listElement.innerHTML = `<li
    class="list-group-item d-flex justify-content-between align-items-center"
>
    <span>${inputElement.value}</span>
    <span>
    <span class="btn btn-small btn-success">&check;</span>
    <span class="btn btn-small btn-danger">&times;</span>
    </span>
</li>`
*/

/* getNoteTemplate получить шаблон заметки*/



/*Object

Отдельный тип данный в JS
Объект - набор или гурппы свойств, которые относятся к конкретной переменной/константе

const person = {
    firstName:'Marina',
    lastName: 'Osipchuk',
    year: 2002,
    cats: true,
    languages: ['ru', 'en', 'fr'],

    getFullName: function () {
        console.log(person.firstName + ' ' + person.lastName)
    }
    
}
console.log(person.year)
console.log(person['languages'])

const key = 'cats'
console.log(person[key])
person.getFullName()

*/

/* 
Unshift - добавляет новый элемент массива в начало и возвращает новую длину массива 
names.unshift('Алена')

Shift - удаляет первый элемент из массива - "Извлекает из массива, но не удаляет"
const name = names.shift()

Pop - обратный метод shift - конец
const name = names.pop()

reverse - переворачивает массив, мутирует массив, те меняет изначальный
console.log(names.reverse())

toReversed - трансормируется в новую, но не меняет старую
const reversed = names.toReversed()

sort - метод, который сортирует массив
const letters = ['a', 'f', 'h', 'j', 'd', 'r']
console.log(letters.sort())

*/

/*Выводится в зависимости от функции. В данном случае из большего вычитает меньшее 
const letters = ['a', 'f', 'h', 'j', 'd', 'r']

console.log(
    letters.sort(function (a, b) {
        return b.charCodeAt(0) - a.charCodeAt(0)  - идет на убывание, он мутирует массив
    })


console.log(letters)
*/
/* Сортировка массива, не изменяя первого значения. По аналогии с toReversed
const letters = ['a', 'f', 'h', 'j', 'd', 'r']
console.log(letters.toSorted())
console.log(letters)
*/

/*Метод splice - он принимает в себя индекс того элемента с которого нам нужно начать работать
splice(2,1), где 2 - индекс элемента массива, 1 - то, сколько элементов необходимо удалить
splice - тоже мутирует массив. Метод toSpliced изменяет массив, но не изменяет иначальный его вид

const letters = ['a', 'f', 'h', 'j', 'd', 'r']
console.log(letters.splice(2,3))
console.log(letters.toSplice(2,3))
*/
/* Метод indexOf позволяет искать элементы массива по индексу. Если не находит элемент, то возвращает -1 - индекс отсутствует
const names = ['Марина','Елена','Виктория','Алена']
const greateWoman = 'Елена'
const index = names.indexOf(greateWoman)
console.log(index)
console.log(names[index])
// При изменении содержимого по индексу, изменяется значение в главном массиве
names[index] = 'Елена Великая' - изменяет значение массива на новое, в т.ч меняет значение в главном массиве
console.log(names[index])
console.log(names)
*/

/* Метод names.with()
//Метод изменяет значение массива, но не изменяет в главном
const names = ['Марина','Елена','Виктория','Алена']
const greateWoman = 'Елена'
const index = names.indexOf(greateWoman)
console.log(index)

const newNames = names.with(index, 'Elena Velikaya')
console.log(names)
console.log(newNames)
*/

/*ОСНОВОПОЛАГАЮЩИЙ Метод map 
В нее передаем анонимную функцию
*/
// const names = ['Марина','Елена','Виктория','Алена']
// const greateWoman = 'Елена'
// const index = names.indexOf(greateWoman)
// const newNames = names.with(index, 'Elena Velikaya')
/*
//ВАЖНО из этой функции что-то вернуть
//Если ничего не вернуть, то массив возвращает undefined
//map всегда возвращает новый массив с измененными данными
toUpperCase - изменяет значение массива на верхний регистр
toLowerCase() - изменяет значение на нижний регистр

const capitalNames = names.map(function(name, index) {
    //работаем с трансформацией или пишем логику для работы с конкретно каждым элементом
    // const newName = name +'!'
    // return newName.toUpperCase()
    if (index === 1) {
        return 'Елена Великая'
    }
    //если оставить только return для index 1, то он возвращает только одно значение, необходимо вернуть все остальное после if
    return name
})
console.log(capitalNames)
*/

/*Метод, который позволяет спросить "А есть ли такой элемент в массиве. Да или нет?" 
includes - проверяет наличие элемента в массиве, если есть - true, если нет - false */
// console.log(names.includes('Алена')) - такой функционал можно сделать через метод indexOf
// console.log(names.indexOf('Алена') !== -1) - говорит, что данный элемент существует, тк индекс отличен от undefined (-1). В данном случае лучше использовать includes, тк он более современный


/*Работа с объектами */
const people = [
    {name:'Marina', cats: 2 },
    {name:'Elena', cats: 6 },
    {name:'Vladimir', cats: 1 },
]

//В данном случае вернет -1 ,тк это не работает. Объекты - это значения, которые содержат некоторые значения, которые содержут ссылки в области памяти
// console.log(people.indexOf({name:'Marina', cats: 2 }))
 /*
Так делать не нужно, так как существую специальные методы для такого алгорима

let findedPerson
for (let person of people) {
    if(person.cats === 6) {
        findedPerson = person
    }
}
*/

/* Метод find
Обращаемся напрямую к объектному массиву. Не нужно писать циклами for

const findedPerson = people.find(function(person){
    //она уже возвращает булево значение
    return person.cats===6
    //if излишен
    // if(person.cats===6) {
    //     //необходимо вернуть булево значение
    //     return true
    // }
})
*/
/*Одна строчка заменяет ведь цикл for. Стрелочная функция. Так как функция написана в одну строчку, то она автоматически подставляет  return
//const finded = people.find((p) =>  return p.cats ===6)
const finded = people.find((p) => p.cats ===6) 
*/
/*Метод findIndex возвращает значение индекса, чем соответсвует переменная 


const finded = people.findIndex(function(person){
    
    return person.cats===6
    
})
заменили Елену на 42
console.log(people.with(finded, 42))
*/
 /*Метод filter никогда не затрагивает старый, а выводит новый
 
let sumCats = 0
const filtered = people.filter(function(p){
    return p.cats >= 2
})
console.log(filtered)

filtered.forEach (function(p) {
    sumCats += p.cats
})
console.log(sumCats)

*/
/*Функциональное написание кода
const sumCats = people.filter(p => p.cats >= 2).map(p => p.cats).reduce((acc, p) => acc + p, 0)
console.log(sumCats)
фильтрация массива -> трансформация массива -> 

reduce: первым параметром передаем функцию, а вторым некоторе начальное значение(объектом, числом, строчкой, массивом и тд)
функция принемает в себя два параметра - аккумулятор и объект итерации - acc + p

можно разбить код на следующий вид:
const byCats = p => p.cats >=2
const pickCats = (p) => p.cats

*/

const string = 'Привет, как дела?'
const reversed = string.split('').toReversed().join('!').split('').filter((c) => c!== '!').join('')
//Если в функции join оставить пустую строчку, то это значит, что он убирает соединитель в виде "запятой"
console.log(reversed)