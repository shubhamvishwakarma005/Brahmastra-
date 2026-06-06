const names = ["arjun", "bheem", "yudhisthir", "karn"]
// console.log(names)

// Empty Arr 
const EmptyArr = Array(3)
// console.log(EmptyArr)

// Array With elemets and empty arr 
const Elements = Array("bhu", "jnu", "MU", "DL", Element[4])
// console.log(Elements);
// console.log(Elements.length)

const Arr = ["BHU", "JNU", "MU", "DL","VBU","IIT","NIT"]
// console.log(Arr.length)

const no = Array.of(3, "numbers")
// console.log(no)

const num = Array.from({length:3})
// console.log(num)

const nooms =[...Array(5).keys()]
// console.log(nooms) // keys 

const nums =[...Array(3).values()]
// console.log(nums) // values

// truncate array in JavaScript 
// Truncate an array means to reduce its length by removing elements from the end.
const alpha = ["A", "B", "C", "D", "E"]
alpha.length = 3
// console.log(alpha)

alpha.length = 8
// console.log(alpha)


// Mutate Array 

// convert string into array 
const train = Array.from('VANDE-BHARAT')
// console.log(train)

// array input and delete
const instrumnet = Array.of()
// console.log(instrumnet)
instrumnet.unshift('pencil')
// console.log(instrumnet)
instrumnet.shift()
// console.log(instrumnet)
instrumnet.push('pen')
// console.log(instrumnet)
instrumnet.pop()
// console.log(instrumnet)

const elem = Array.from('PENCILS')
// console.log(elem)
// console.log(elem.slice(1, 3))  // non - mutate
// console.log(elem.splice(1, 3)) //  mutate array


// To check Array 
// console.log(Array.isArray(names)) 

const Arre =["pencil", "notebook", "pen", "ink"]
// console.log(Arre.indexOf("pen"))
// console.log(Arre.includes("pen"))
// console.log(Arre.find((elem)=> elem === "zero" ))
// console.log(Arre.findIndex((elem)=> elem === "pen"))

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

// #2 reduce()
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