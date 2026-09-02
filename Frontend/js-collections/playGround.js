// data type and there typeof  
let name = "Shubham"
// console.log(typeof name);       //string
// console.log(typeof undefined)   // undefined
// console.log(typeof null)       // object


let arr = [1, 5, 8, 6, 5]
// console.log(arr)
// console.log(typeof arr)  //typeof Object


const car = {
    model: "tata-safari",
    price: 500000
}
// console.log(car)
// console.log(typeof car)  //typeof object


function greet(name) {
    return `Hello ${name}`
}
// console.log(greet("shubham"))   
// console.log(typeof greet)     //typeof function 



// COPY 

// independent copy 
let price = 5000;
let duple_price = price;

price = 6000
duple_price = 8000
// console.log(price);
// console.log(duple_price)


// deep copy 
// 1: spread operators 
const order = {
    chaat: 'chole-chaat',
    chawmin: "noodles",
    role: "egg-role"
}

// const repear_order = {...order}
// order.chawmin = "hakka-noodles"
// repear_order.chawmin="manchou-noodles"
// console.log(order)
// console.log(repear_order)



// 2: deep copy method by structuredClone()
const order_two = structuredClone(order)
// ordersat = "onion-chaat"
// console.log(order)
// console.log(order_two)



// Array 
// method of array declearation 
const names = ["arjun", "bheem", "yudhisthir", "karn"]

// console.log(typeof names) // typeof object

const added_names = Array(5)
// console.log(added_names)

const new_names = Array("suraj", "sagar", "kartik")
// console.log(new_names)

const multi_elem = Array.of(5, "jackfruit")
// console.log(multi_elem)

const open_garden = Array.from('shivaji-park')
// console.log(open_garden);



// mutate array 
const characters = Array.of()
characters.unshift("chota-bheem")
characters.shift()
characters.push('chutki')
characters.pop()
characters.push('Doremon')
// console.log(characters[0].length)
// console.log(characters[0].slice(0, 7))


// Searching Method in array 

// console.log(names.indexOf('karn'))  //check elment index
// console.log(names.includes('karn')) // check element existence


// loops 

for (let i = 0; i < names.length; i++) {
    // console.log(names[i])
}

names.forEach(char => {
    // console.log(char)
})




// Object 

const user_info = {
    name: 'anony',
    email: 'anony101@gmail.com',
    userId: 101,
    nickName: ["anonymoust", "babu", "sona"],

    address: function () {
        return { country: "IND", state: "JH", dist: "KOD" }
    }
}

// console.log(typeof user_info);

// console.log(user_info.hasOwnProperty('email'))

for(let keys in user_info){
    console.log(user_info[keys])
}

for(let value in user_info){
    console.log(user_info[value])
}