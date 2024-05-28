//Function Declaration - мы можем вначале эту функцию вызвать, а потом объявить

// function greet (name){
//     console.log('Hello - ', name)
// }

// //Function Expression - не может вызваться до того, как ее объявили
// const greet2 = function (name){
//     console.log('2 Hello - ', name)
// }

// greet2('Marina')
// greet('Marina')


// // setTimeout(function(){
// //     greet('Marina') //анонимная функция
// // }, 2000)

// let counter = 0
// const interval = setInterval(function() {
//     if (counter===5) {
//         clearInterval(interval)
//     } else {
//         console.log(++counter);
//     }
    
// }, 1000)


/*Arrow Function

function greet (name){
    console.log('Hello - ', name)
}

const arrow = (name) => {console.log('Hello - ', name)}
arrow('Marina')

const arrow2 = (name) => console.log('Hello - ', name)

arrow2('Marina')

// function pow(num, exp) {
   
//     return Math.pow(num,exp)
// }
const pow2 = (num, exp) => Math.pow(num, exp)

// console.log(pow2(2,3));


//Default Parameters

const sum = (a, b) => a+b

// console.log(sum(40, 2))
// console.log(sum(40)) //NaN

function sumAll(...numbers) {
    // let res = 0
    // for (let num of numbers) {
    //     res +=num
    // }
    return numbers.reduce((acc, cur) => acc+cur, 0)
    // console.log(numbers);
} //три точки - оператор rest, те он говорит, что все те параметры, которые ты передаешь ко мне в функцию положи в массив

console.log(sumAll(1, 2, 3, 4, 5));
*/

/*Closures Замыкание - это когда функция и данная функция может замнуть в себе определенное значение, которое в дальнейшем может использоваться
функция в функции*/

function createPerson(name) {
    return function(lastName) {
        console.log(name + ' ' + lastName);
    }
}

const addLastName = createPerson('Marina')

addLastName('Osipchuk')

