/* Строки 
const name = 'Marina'
const age = 22
// const output = `any string`
function getAge(){
    return age
}
// const old = 'Hello my name is ' + name + ' and my age is ' + age
const output = `Hello my name is ${name} and my age is ${getAge() > 18? 'I can drive' : `I can't drive`}`
console.log(output)

const firstName = 'Marina'
const age = 22
console.log(firstName.length); //длина строки
console.log(firstName.toUpperCase()); //верхний регистр
console.log(firstName.charAt(2-1)); // выдает ту букву, которая соответствует индексу, установленному в скобка функции
console.log(firstName.indexOf('a')); //выдает индекс, на каком располагается буква
console.log(firstName.toLowerCase().startsWith('mar')); //startWith возращает булево значение. Проверяет, начинается ли строчка со значения в скобках
console.log(firstName.toLowerCase().endsWith('na')); //проверяет, заканчивается ли строка на значение, указанной в скобках
console.log(firstName.repeat(2)) //повторяет строки столько раз, соклько указано в скобке

const password = '     my sup pas   '
console.log(password.trim())  //убирает лишние пробелы в строчке
*/

