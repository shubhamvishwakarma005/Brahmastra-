// #1 
// func Declearation 
function testFun(name){
    return `Hello,${name}`
}
// console.log(testFun('shubham'));

const greet = (name)=>{
    return `Hello,${name}`
}
// console.log(greet('shubham'))


// #2 
// this  : refer Window as global object normal || arrow
function checkThis(){
    console.log(this)
}
// console.log(checkThis())

const testThis = ()=>{
    return this
}
// console.log(testThis())

const usercheck = {
    name:'anany',
    userId:101,
    gmail:'anony@101.gmail.com',
    // normal func 
    about: function(){
        return `Username:${this.name}, UserID:${this.userId}` // refer object
    },
    // arrow func 
    contact:() => {
        return `userGmail:${this.gmail}` // undefined
    }
}
// console.log(usercheck.contact())


// #3 
// ARGUMENTS 
function testArgu(){
    console.log(arguments) // has arguments
}
// testArgu(1,2,3) 

const arguCheck = ()=>(console.log(arguments)) // do not have arguments
// arguCheck(2,3,4) 


// function || arrow function
// function Declearation 
// this 
// arguments

// function is a piece of code which is used for perform specific task multiple times .
// arrow function is similar like normal function but it has different some diffrence like 
// * It do not have own "this" it 
// * It do not use arguments 
// * It has short syntax 