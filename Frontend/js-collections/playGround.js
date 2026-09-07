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


// ********************************************************************************************

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


// ********************************************************************************************

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



// ********************************************************************************************

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

for (let keys in user_info) {
    // console.log(`key: ${keys}`)
}

for (let value in user_info) {
    // console.log(`values: ${user_info[value]}`)
}

for (const [keys, value] of Object.entries(user_info)) {
    // console.log(`key: ${keys} : value:${value}`)
}


// ********************************************************************************************

// this & it's behaviour

// console.log(this);  // global

// function gloabl_test() {
//     return typeof this;    // object
// }
// console.log(gloabl_test())


// function gloabl_test2() {      // global
//     return this
// }
// console.log(gloabl_test2())   


const bollywood = {
    cast: ["Ranveer Singh", "Dipika Padukone", "Saheed Kapoor"],
    director: "Sanjay leela Bhansali",

    movie() {
        this.cast.forEach(artists => {
            console.log(`${this.director} announced movie with ${artists}`)
        })
    }
}
// bollywood.movie()


// Detached method  ******** 1
const movie_prep = {
    crew: "Spot Boys",

    set_prep() {
        console.log(`Set prepare by ${this.crew}`)

        function light_prep() {
            console.log(`Light prepare by ${this.crew}`)      // normal function
        }
        light_prep()

        const arrange_chairs = () => {
            console.log(`Chair arranged by ${this.crew}`)     // arrow function
        }
        arrange_chairs()
    }
}
// movie_prep.set_prep()


// Detached method  ******** 2

const movie_award = {
    award:"film-fair award",
    actor:"amitabh bacchan",

     nominated(){
        return `${this.actor} got nominated for ${this.award}`
    }
}

// console.log(movie_award.nominated())  

const award_news = movie_award.nominated
// console.log(award_news())



// ********************************************************************************************
//call, apply & bind : This call bind and apply is used to pass refrence to function 

function food_order(ingredent, style){
    return `${this.name}Cooked ${ingredent} in ${style}`
}

const gupta_ji = {name:"Gupta ji "}
const sharma_ji = {name:"Sharma ji "}

const gupta_sell = ["Chicken Biryani", "Hydrabadi Style"]
const sharma_sell = [["Sarso-da-saag " , "Makke-di-roti"], "Panjabi Style"]

// apply & call return result
// call *******
// console.log(food_order.call(gupta_ji,"Palak-Paneer", "Panjabi-Style"))
// console.log(food_order.call(sharma_ji, "Biryani", "Hydrabadi style"))

// apply *******
// console.log(food_order.apply(gupta_ji, gupta_sell))
// console.log(food_order.apply(sharma_ji, sharma_sell))

// bind return new function
const check_order = food_order.bind(gupta_ji, "Paneer Kofta", "Desi Style")
// console.log(check_order())


// ********************************************************************************************
// new 
// steps :  {} create empty object 
// step2 : link empty object prototype to function (TataCar) prototype 
// step3 : this, bind value to called function
// step4 : new , explicit return value which call the function

// type 1
// everyone share same memory 
function TataCar(chesis, model, fuel){ 
    this.chesis = chesis;
    this.model = model;
    this.fuel = fuel;
}

TataCar.prototype.status = function(){
    return `Car ${this.model} || ${this.chesis} || ${this.fuel}`
}

const car1 = new TataCar('MH46-01', "Safari", "75%")
// console.log(car1)

// type 2
// Factory function  : everyone has its own memory 

function MahindraCar(car_code, route){
    return{
        car_code,
        route,
        run(){
            return `${this.car_code} runs ${this.route}`
        }
    }
}

const vehical1 = MahindraCar('JH-01', "Ranchi-Dhanbad")
// console.log(vehical1.run())


// ********************************************************************************************
// prototype 

const prithivaj = {
    name:"Prithivi Raj",
    generation:"Grand Father",
    welth:'5cr',
    dish(){
        return `${this.name} cooks famous Family Dish`
    }
}
// console.log(prithivaj.dish())


const raj = Object.create(prithivaj)
raj.name = "raj";
raj.generation = "Father";
raj.runBusiness = function(){
    return `${this.name} runs movie production business`
}
// console.log(raj.dish())


const ranbir = Object.create(raj)
ranbir.name = "ranbir kapoor";
ranbir.generation = "son";
ranbir.welth = '200cr';
ranbir.work = function(){
    return `${this.name} is a hero of bollywood movies`
}
// console.log(ranbir.work())
// console.log(ranbir.dish())


// ********************************************************************************************
// polyfills 

// let nme = [2,5,8,9]

// pollyfill lib 
// forEach, map(), reduce()

// const num = [2,8,9,8,3]
// console.log(num)

// Array.prototype.map = function(){
//     this.map
// }

// ********************************************************************************************

// callback function 

const num = [2,8,9,8,3]

// forEach : only loop 
const check =  num.forEach((no) => {
        // console.log(no)
})
// console.log(check)
// console.log(check === undefined)


// map() → transform each element and return a new array.
const test = num.map((no) => {
   return no + 5;
})
// console.log(test)


// filter() is an array method that checks each element against a condition and returns a new array containing only the elements for which the condition returns true.
const target = num.filter((no) =>{
    return no > 5
})
// console.log(target)


// find : callback searches for the first matching element
const search = num.find((no)=>{
   return no === 9;
})
// console.log(search)


//  some → callback checks whether at least one matches
const many = num.some((no)=>{
    return no ===8
})
// console.log(many)

// every → callback checks whether all match
const more = num.every((no)=>{
    return no === 8
})
// console.log(more)

// 1. forEach → callback executes for every element
// 2. map → callback transforms every element
// 3. filter → callback decides which elements to keep
// 4. find → callback searches for the first matching element
// 5. some → callback checks whether at least one matches
// 6. every → callback checks whether all match
// 7. reduce → callback accumulates values into one result

