const Arr = ["pen", "rubber", "copy", 4, true, "brush"]

const Obj = {
    id:"AR154",
    fuel:"full",
    speed:"120 km",
    model:"TR20VZ"
}

// for  #1
for(let i=1; i<Arr.length; i++){
    // console.count(Arr[i])
}

// #2 
for(let key in Obj){
//   console.log(key,  Obj[key])
}

// #3
for(const [key, values] of Object.entries(Obj)){
    // console.log({key, values})
}

// High Order Function 
// forEach(), reduce(), map(), filter() 

// forEach : just for looping
// Arr.forEach((e)=>console.log(e))

const nums = [1,2,3,4,5,6,7,8]

// reduce() :-  work with calculation
const sum = nums.reduce((acc, cur)=> acc+ cur, 5)

// map() : Data Transformation
const mapValues = nums.map((e)=> e*5)

// filter() : To filter data 
const filtValues = nums.filter((e)=> e > 2)



//******* Serialization & Desearialization  ***********

const serialValue = JSON.stringify(Obj)
// console.log(serialValue)

const DesearialValue = JSON.parse(serialValue)
// console.log(DesearialValue)



//*******  Database Storage Flow ***********

// 🔹 DATABASE STORAGE
Object => JSON.stringify()  // Store in DB

// 🔹 BACKEND (Data nikalte waqt)
JSON => JSON.parse()  // Use in backend (JS object ban gaya)

// 🔹 FRONTEND KO BHEJNA
Object => JSON.stringify()  // Send over network (API response)

// 🔹 FRONTEND (Receive karne ke baad)
const data = JSON.parse(response)  // Use in frontend