// Var :- Var has function scope, Hoisting will be possible in var.
// Reassignment and redeclearation is also possible in var .

// console.log(greet())
function greet(){
    var name = "shubham"
    return `Hello,${name}`;
}


// let :- Let is block scope , reassignment is possible in let 

// console.log(userName)
let userName = "alpha"


// const :- const has block-scope, hoisting is possible but, because of Temporal Dead Zone it throw refrence error . Reassignment and Redeclearation is not possible .


const  value = 2235;
// value = 5543
// console.log(value)

// what ?  :- Var, Let and Const are Keyword in js . It is used to decleare the variables in js .  

// When ?  :- Var: It is function scope only because of that user able to redecleare the value and reassignment is also possible , hoisting is also possible in this .

// let :- If we talk about the let , reassignment is possible but redeclearation is not possible , hoisting is also possible but because of temporal dead zone refrence error will be thrown .

// const : In const redeclearation and reassignment Both not possible , hoisting is possible but because of temporal dead zone it will thrown refrence error 
// How ? 

