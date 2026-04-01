// Diffrence between  let , var & const 
var chai = 'masala adrak chai' // global scope 
// console.log(chai);


if (true) {
    var chai = 'kali chai'  // using var it works as global scope
}

// console.log(chai);   // accessible 


// fucntion scope "var" only has "function level scope" 

function chaido() {

    var chai = 'green tea'   // only inside function accessible not outside function because of function level scope
}


// function level scope  || 
function chaido() {
    if (true) {
        var chai = 'green tea'
    }

    // console.log(chai); // accessible 

}

// let  only reassignable 
let Tea = 'mint tea'
Tea = 'mix masala tea'

// console.log(Tea)

// redecleare not possible 
// let Tea = 'Green leaf masala' 


// const :- nor reassignable || nor redeclearable  possible



//*************** const OPERATION ****************

// Array
const names = ["arjun", "abhi", "yddist", "nakul"]

// names ["sahdev"]  // assigning full array is not possible 

names.push('sahdev') // only performing operation on values is possible 

// console.log(names)


//**************** */ Object OPERATION******************

const info = {
    name:"Vaasudev Krishna",
    nikName: ["Madhav"]
}

// info = {} // assigning full object is not possible 

info.nikName.push('kanha') // only performing operation on values is possible 

// console.log(info)




// Diffrence between let, var and const 
// let, var and const are the keyword in js, using which the variable declearation will be possible , so the basic diffrence between them is 
// let has block level scope because of that it only allow reassign the value not redeclearation 
// const also has block-level scope which do not allow re-assign and re-declearation 
// var has function level scope which allow variable access outside the loop and object but because it has function scope we do not able to acces the variable outside the function . 