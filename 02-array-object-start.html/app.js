/* //Массив - это коллекция каких-либо элементов. Перевенная, в которой хранятся другие переменные
//Для массивов лучше использовать const

const array = [1, 2, 3, 5, 20, 42]
// const arrayString = ['a', 'b', 'c']
// const array = new Array (1, 2, 3, 5, 20, 42) - излишний способ, в основном используют квадратные скобки

// console.log(array.length) - длина массива
// console.log(array[5-3])
// console.log(array[10])
// console.log(array[array.length-1]) - последний элемент массива

array[0] = 'Hello!'
console.log(array)

// array[array.length] = 'becon'  - добавление элемента в массив, не рекоммендуется использовать
*/

const inputElement = document.getElementById('title')
const createBtn = document.getElementById('create')
const listElement = document.getElementById('list')


// console.log(inputElement.value)

// function createElementOfList() {
//     const name = title.value
// }


createBtn.onclick = function() {
    listElement.innerHTML = inputElement.value
}