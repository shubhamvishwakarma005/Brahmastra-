function listOfElements(){
    // console.log(arguments)
    // console.log(typeof arguments)
    // console.log(Array.isArray(arguments))
    // console.log(Object.entries(arguments))
    // console.log(Array.from(arguments))
}

// listOfElements("shubham", 1, "Mumbai")

// arrow func
const arr = ()=>{
    console.log(arguments)
}
// arr("shubham")


// Pure and impure function 
//  when function change outer elements is called impure function.
// when function only change inner function is called pure function.
let count = 1;
function counter(){
    return count++;
}
// console.log(counter())


// IIFE 

// (function globeCount(){
//     console.log(count++)
// })()

const portion = (function(){
    let inventory = 0

    return {
        
            brew(){
                return inventory++;
            },
            
            getStock(){
                return inventory;
            }
        }
    })()

    // console.log(portion.brew())
    // console.log(portion.inventory)
    // console.log(portion.getStock())

