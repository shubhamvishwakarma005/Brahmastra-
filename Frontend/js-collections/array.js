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
    { dish: "pasta", price: 399, qty: 4 , spicy:true},
    { dish: "rasam", price: 249, qty: 2 , spicy:true},
    { dish: "idli", price: 149, qty: 8 , spicy:false},
    { dish: "vada", price: 149, qty: 8 , spicy:false},
    { dish: "samosa", price: 49, qty: 12 , spicy:true},
]

// forEach() || forEach() accept sync function, it do not work in async
order.forEach( (order, index)=>{
    // console.log(`${index + 1}: ${order}`)  // string 
} )

// map( )
const myDish = order.map((ord)=>(`I Ordered ${ord.qty} ${ord.dish}`))
// console.log(myDish) // array []

// filter()
const dishPrice = order.filter((ord)=>(ord.price >= 200 ))
// console.log(dishPrice) // array of object [{},{}]

// reduce() #1 
const serveCharge = order.reduce((accum, currVal)=>(accum + (currVal.price * currVal.qty)), 20)
// console.log(serveCharge)

// #2
const checkSpicy = order.reduce((accum, ord)=>{
     const category =  ord.spicy ? "spicy": "mild"
     accum[category].push(ord.dish)
     return accum
}, {spicy:[], mild:[]})

// console.log(checkSpicy)  // object of array {[],[]}

// eg: accum[category] = accum.spicy || accum.mild =  accum[category]

// #3 
const checkPrice = order.reduce((accum, ord)=>{
const prices = ord.price >= 200 ? "expencive" : "cheap"
accum[prices].push(ord.dish)
return accum
},{expencive:[], cheap:[]})

// console.log(checkPrice)  // object of array {[], []}


// sorting 
const nums = [20, 50,32, 4, 56, 82]
const assendSort = [...nums].sort((a,b)=> a-b)  // assending order
const decendSort = [...nums].sort((a,b)=> b-a)
// console.log(assendSort)
// console.log(decendSort)

// console.log( nums.toSorted((a,b) =>(a-b)) )