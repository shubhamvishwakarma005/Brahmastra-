const names = ["arjun", "bheem", "yudhisthir", "karn"]

const empty = Array(3)

const element = Array("mars", "earth", "saturn", "venus")

const no = Array.of(3, "numbers")

const train = Array.from('VANDE-BHARAT')

// truncate array in JavaScript 
const alpha = ["A", "B", "C", "D", "E"]
alpha.length = 3
alpha.length = 8

// mutate array 
const instrumnet = Array.of()
instrumnet.unshift('pencil')
instrumnet.shift()
instrumnet.push('pen')
instrumnet.pop()

const elem = Array.from('PENCILS')
elem.slice(1, 3)  // non - mutate
elem.splice(1, 3)  //  mutate array


// SEARCHING ARRAY 
// indexof , includes, find, findIndex

// check array 
Array.isArray()

console.log();


// KEY POINTS 
// array is 0 based 
// mutate method :- push, pop, shift, unshift, splice
// non-mutate method :- slice, flat, concat, flatmap
// searching :- includes, findIndex, indexOf
// check array :- ARRAY.isArray()


// **************************OPERATIONS**********************************

const order = [
    { dish: "pasta", price: 399, qty: 4 },
    { dish: "rasam", price: 249, qty: 2 },
    { dish: "idli", price: 149, qty: 8 },
    { dish: "vada", price: 149, qty: 8 },
    { dish: "samosa", price: 49, qty: 12 },
]

order.forEach( (order, index)=>{
    // console.log(`${index + 1}: ${order}`)  // string
} )


const myDish = order.map((ord)=>(`I Ordered ${ord.qty} ${ord.dish}`))
// console.log(myDish) // array


const dishPrice = order.filter((ord)=>(ord.price >= 200 ))
// console.log(dishPrice) // array of object

