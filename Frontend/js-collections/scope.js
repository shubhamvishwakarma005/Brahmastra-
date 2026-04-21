var name = "Shiv"

function greet(){
    return `Hello ${name}`
}
// console.log(greet());

const user ={
    name:"Ram",
    email:"ram@gmail.com",
}
// console.log(user.name) // block scope
// console.log(`Hello ${name}`) 


function father(){
    var property = ["House", "Car", "Farm_Lands", "Cash"]
    // `Father Property : ${property}`

    function child(){
        let child_Earn = ["New Car", "Two-Wheelers"]
        return `Child Property: ${property}`
    }

    return child()
}

console.log(father())