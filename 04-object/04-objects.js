const person = {
    name: 'Marina',
    age: 22,
    isMother: false,
    address: {
        city: 'Maloyaroslavets',
        street: 'v.Petrova',
    },
    'complex key':'computed value',
    language: ['ru', 'en'],
    //стрелочная функция не создает свой собственный контекст
    arrow: () => {console.log('Person arrow');},
    info() {
        console.log(this);
        // console.log('Person name', person.name); неправильно
        console.log('Person name', this.name);
    },

}

// person.language.splice(0, 1, 'de', 'br')
// console.log(person.language);

// person.info()

// //как получать неокторые ключи:
// console.log(person.address);
// console.log(person['address']);
// console.log(person['complex key']);

// //динамический ключ
// const addressKey = 'address'
// console.log(person[addressKey]);

// person.age++
// console.log(person.age);

// person.language.push('de')
// console.log(person.language);

// //удаление ключей из объекта
// // person.age = undefined //неправильное удаление
// delete person.age //правильное удаление свойства объекта
// console.log(person);

//декструктуризация

// const age = person.age
// const name = person.name
// const language = person.language

// const{language, age, name} = person

// console.log(language, age, name);

//при использовании такого цикла может возникнуть ошибка
/*
for (let key in person) {
    // console.log(key);
    //если мы хотим получить только собственные ключи данного объекта, то дял этого необходимо добавить проверку
    //тк без проверки цикл затрагивает прототипы
    //могут спросит на собеседовании
    if(person.hasOwnProperty(key)){

        console.log(person[key]);
    }
}

console.log([1, 2]);
*/

//массив из строк, в котором хрянятся все ключи данного объекта
// console.log(keys)

// const keys = Object.keys(person)
// keys.forEach((key) => {
//     console.log(person[key]);
// })

// //продвинутый метод
// Object.keys(person).forEach((key) => {
//     console.log(person[key]);
// })

//с помощью функции logger вывести значение объекта person

// const logger ={
//     keys(){
//         console.log('Object keys', Object.keys(this));
//     },

//     keysAndValues(){
//         Object.keys(this).forEach((key) => {
//             console.log('Key', key);
//             console.log('Value', this[key]);
//         })
//     }
// }
// logger.keys()
// logger.keysAndValues()


/*Метод bind возвращает новую функцию, но не вызывает ее
const bound = logger.keys.bind(person)
bound()
*/

/*Аналогичный метод методу bind 
строчка logger.keys.bind(person) возвращает нам функции, то мы можем сразу ее вызвать

logger.keys.bind(person)()
*/

/*Другой метод call и apply
разница между методами:  call имеет неограниченное количество параметров
apply всегда два парамерта, второй является массивом, который выполняет тоже самую функцию как и call

тоже bind-ит этот контекст, но сразуже вызывает функцию 
logger.keys.call(person)
logger.keys.apply(person)
*/

/*Классы позволяют создавать нам объекты 
в классе можем создавать методы*/
class Human {
    static isHuman = true
    //поле статичное и не проецируется на экземпляры класса, но мы можем его получить у другого класса
    //Оно относится к самому классу, а не его экземпляру
    humanGreet(){
        console.log('greet from human');
    }
}
class Person extends Human{
    constructor(name, age) {
        //функция, которая вызывает родительский контруктор
        super()
        this.name = name ?? 'Undefined name'
        this.age = age ?? 'Undefined age'
    }

    sayHello(){
        console.log('Hello from ' + this.name);
    }
}
const person1 = new Person('Marina', 30)
// console.log(newPerson);
person1.sayHello()
console.log(Human.isHuman); //прототипированная цепочка