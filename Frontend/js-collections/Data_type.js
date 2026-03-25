// Data Type 

// **************** Primitive *********************

// String 
const name = "Vasudev Krishna"
// console.log(`Name: ${name} || Type of : ${typeof name}`)

// number 
const number = 225486
//  console.log(`Number: ${number} || Type of : ${typeof number}`)

//  BigInt 
const BigNumber = 225486n
//  console.log(`Number: ${BigNumber} || Type of : ${typeof BigNumber}`)

// Boolean 
const result = true || false
// console.log(`Result: ${result} || Type of : ${typeof result}`)

// undefined  := not any value assigned 
let value;
// console.log(`Value: ${value} || Type of : ${typeof value}`)

// null  := intentionally leave for future assignment
let score = null;
// console.log(`Value: ${score} || Type of : ${typeof score}`) 

// Symbol  := Unique || immutable



// **************** Non - Primitive *********************

// Object 
const Car = {
    name: "Maruti Suzuki",
    Model: 'A520RRs',
    price: 6_00000,
}
// console.log("Value :", Car,"||", "Typeof :", typeof Car) 


// Array 
const Biscuits = ["Mari", "Gooday", "Crack-jack", "Crackers"]
// console.log("Value :", Biscuits, "||", "Typeof :",  typeof Biscuits)


// function 
function greet(name) {
    return `Hello ${name}`
}
// console.log("Value :",greet("Krishna"), "||" ,"Typeof :", typeof greet)




// *****************Copy******************************

// **** INDEPENDENT COPY *****  
// the copy element will not affect original || or duplicate while changes

// copy by value 
let orig = 100; 
let dupli = orig
// console.log(`Orig : ${orig}`);
// console.log(`Dupli : ${dupli}`)

orig = 300
dupli = 500

// console.log(`Orig : ${orig}`);
// console.log(`Dupli : ${dupli}`)


// ****shallow copy *** 
// If we change anything in original or duplicate it will affect the original and duplicate copy as well 

//****  Object ****
const fruits = {
    apple:'2kg',
    graps:'3kg',
    orange:'2kg',
    mango:{
        haapoos:'3kg',
        langra:'4kg',
        kesari:'2kg'
    }
}

// console.log('Original :',fruits);

let order = fruits.mango.langra = '10kg'

// console.log('Original :',fruits);
// console.log('Dupli :',fruits);

//******  Array ****** 
let persons = ["krishna", "arjun", "karn", "nakul", "bheem"]

// console.log('Original :',persons);

let anotherperson = persons

anotherperson.unshift('Dron')

// console.log('Original :',persons);
// console.log('Dupli :',anotherperson);




//****  Deep Copy ******

// copy by refrence 

let tools = {
    Hammer:'5 piece',
    screwdriver :'2 piece',
    plaas:'5 piece',
    nuts:{
        small:'200 piece',
        medium:'400 piece',
        bigs:'500 piece'
    }
}



// #1 spread operators :- shallow copy
let orders = {...tools}
// console.log('original:', tools);
// console.log('Duplicate:', orders)


// #2 structureclone method:- fully copy

let orderTools = structuredClone(tools)
orderTools.nuts.small = '800 piece'
// console.log('original:', tools);
// console.log('Duplicate:', orderTools)

