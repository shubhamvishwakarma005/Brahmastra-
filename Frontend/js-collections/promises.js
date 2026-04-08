// Topic covered : Async javascript :- promise, 



// Event loop : which decide what to run when 
// callStack : take task from event-loops and run one by one because js is single threaded language
// queue: take all async task from event loop, run and send back to event-loop

// promise 
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hello')
    }, 2000)
})

setTimeout(() => {
    //    console.log(promise);
}, 3000)

// console.log(promise);

// ****************************fetch()****************************************

// fetch():-  fetch run async task of js and it will handle it with promise like , fetch call any api and ask for data if data given by api, that data gone to promise , resolve section and from there to .then() .  if api do not respond it will throw error gone to reject section and from there to .catch() this is the whole process of fetch , promise(res, rej).then().catch().


// types of promise 

// promise.all : if all promise resolved then and only then it will run

// promise.any : if any promise resolved it will run.

// Promise.allSettled : any promse run it will give if any throw error it will give that also

// test-here :
// const promiseTypes = new Promise.allSettled


//*************************async await********************


// async function name(params) {
//     try {

//     } catch () {

//     }
// }