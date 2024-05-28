/* Числа, строки, даты
//в JS нет разделения, в отличии от C#

Метод console.dir() показывает все значения функции

const num = 42 //integer - целочисленное чисто
const float = 42.42 //float - числа с плавающей точкой
const pow = 10e3 //чисто в степени = 10 в степени 3
const big = 1_000_000 //нижнее подчеркивание не влияет на функционал
console.log(Number.MAX_SAFE_INTEGER) //самое большое безопасное число, с которым мы можем делать манипуляции JS
console.log(Math.pow(2, 53) -1)
console.log(Number.MIN_SAFE_INTEGER)
console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)
console.log(Number.POSITIVE_INFINITY)
console.log(Number.NEGATIVE_INFINITY)
console.log(Number.isFinite(42)) //проверка. Проверяет бесконечно ли число. Возвращает true или false
console.log(23/undefined)

const weird = 23/undefined
console.log(Number.isNaN(12)) //проверка, работаем мы сейчас с NaN или нет
*/
/*const strInt = '42'
const strFloat = '42.42'

//приведение строки в численный вид
console.log(Number(strInt))
console.log(Number(strFloat))
console.log(parseInt(strInt))
console.log(parseFloat(strFloat))
console.log(+strInt, +strFloat) //еще один метод приведения строки к числу

//работу с дробными числами нужно всегда очень сильно проверять в JS
//метод toFixed всегда возвращает строчку
console.log(+(0.1+0.2).toFixed(1))
console.log(parseFloat((0.1+0.2).toFixed(1)))
*/

/*BigInt - необходямо, когда нам надо выполнять операции с числами, которые превосходят значение MAX_SAFE_INTEGER 
Может быть отрицательным значением
Ограничения: 1. Может работать только с BigInt-ом. 2. Не может быть плавающим


console.log(Number.MAX_SAFE_INTEGER)
console.log(BigInt(Number.MAX_SAFE_INTEGER)+94224980n)
console.log(-42n)


// console.log(10n-4) //error
console.log(parseInt(10n) -4)
console.log(10n - BigInt(4))
console.log(5n/2n) //работает с целыми числами, дробная часть отваливается
console.log(5/2)
*/

/*Методы в объекте Math */
// console.dir(Math) или можно написать в консоли Math
// console.log(Math.E)
// console.log(Math.PI)

const myNum = 4.6 

/*Основные функции метода Math 
// console.log(Math.sqrt(25))
// console.log(Math.pow(2, 3))
// console.log(Math.abs(-42))
// console.log(Math.max(2, 5, 42, 199, 0)) //функция возвращает максимально из них
// console.log(Math.min(2, 5, 42, 199, 0)) 
console.log(Math.floor(myNum))  //floor - всегда округляет число в меньшую сторону
console.log(Math.ceil(myNum)) //ceil - всегда округляет число в большую сторону
console.log(Math.round(myNum)) //до ближайшего целочисленного значения
console.log(Math.trunc(myNum)) //всегда возвращает только целую часть числа
console.log(Math.random()) //возвращает рандомной число в диапазоне от 0 до 1
*/
const numRandom = Math.random()
function getRandomNumber(min, max) {
    return Math.floor(numRandom * (max - min +1) + min)
}

const num1 = getRandomNumber(10, 100)
console.log(numRandom)
console.log(num1)