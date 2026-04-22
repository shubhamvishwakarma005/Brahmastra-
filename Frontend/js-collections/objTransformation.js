const specialUnit = {
    name:"charlie",
    spcl_Id:"CL2256",
    unit:"paraSPCL",
    rank:2256485
}

const key = Object.keys(specialUnit)
const values = Object.values(specialUnit)
const entries = Object.entries(specialUnit)
// console.log(key)
// console.log(values)
// console.log(entries)


// operation on object  
// Object.freeze(specialUnit)
// Object.seal(specialUnit)
// specialUnit.rank = "UN454544";
// console.log(specialUnit)


// merge object 
const userOne = { 1: 'abc', 2: "def" }
const userTwo = { 3: 'ghi', 4: 'jkl' }

const mergeObj = Object.assign({}, userOne, userTwo)
const mergeObj_2 = {...userOne, ...userTwo}


// searching 
// console.log(specialUnit.hasOwnProperty("unit"))


// DESTRUCTURING 
const user = {
    name:"ALPHA_156",
    unit_Id:"AL-58680"
}

const {name : naam} = user
// console.log(naam)



// Array to Object 
const Arr = ["alpha", "beta", "gama"]
const newObj = Object.entries(Arr)
// console.log(newObj)

// Object to Array 
const arrayLike = { 0: 'a', 1: 'b', length: 2 };
const realArray = Array.from(arrayLike);
// console.log(realArray)