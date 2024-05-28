//В js мы можем делать различный ассинхронный код. Асинхронность сделана с помощью механизма 
//Event Loop

// const timeout = setTimeout(()=> {
//     console.log('after 2 second')
// }, 2000)
// clearTimeout(timeout)
// setTimeout(()=> {
//     console.log('after 3 second')
// }, 3000)

// let count = 0
// setInterval(()=>{
    
//     console.log('tick', ++count)
// }, 1000)

/*НЕ саммый эффекиный интсрумент из-за своей многовложенности - callBackHell 
function delay(callBack, time = 1000){
    setTimeout(callBack, time)
}
delay(()=>{
    console.log('timeout');
}, 2000)
*/

/*Функция Promise - обещание (в будущем) */

const delay = (time = 1000) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve([1, 2, 3])
            reject('Error in delay')
        }, time) //это ассинхронность
    })
    return promise
}
/*чейнинг
delay(2500).then((data)=> {
    console.log('Timeout', data);
    return data.map(x=>x**2)
}).then(data =>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
}).finally(()=>console.log('Finally'))*/

/*Прямая эмуляция работы с сервером */
const getData= () => new Promise((resolve)=> resolve([1, 2, 3]))
// getData().then(array => console.log(array))

/*Асинквэй */

async function asyncExample(){
    //есть нативный синтаксис вместо того, чтобы постоянно прописывать .then .catch . finnaly
    try{
        await delay(3000)
        const data = await getData()
        console.log(data);
    } catch(err){
        console.log(err);
    } finally{
        console.log('Finally')
    }
}
asyncExample()

