const user = {
    name:'anony',
    email:'anony101@gmail.com',
    userId:101,
    nickName : ["anonymoust", "babu", "sona"],

    address:function(){
        return {country:"IND", state:"JH", dist:"KOD"}
    }
}

// console.log(user['nickName'])  // to access nickname
// console.log("name" in user);  // check present data

// check existing values 
// console.log(user.hasOwnProperty('toString')) //check input is present or not

// *********** copy ******************
// shallow copy 
const anotherUser ={...user}
// console.log(anotherUser)

// deepCopy 
// const nayauser = structuredClone(user)
// nayauser.address = user.address
// console.log(nayauser.address())

// *****************Key || value ***********************

for( const keys in user){
    // console.log(user[keys])
}

for( const value in user){
    // console.log(value)
}

// user.forEach( (data)=>{
//     // console.log(data)
// })



const keys = Object.keys(user)
const values = Object.values(user)
const entries = Object.entries(user)

// values in Array 
// console.log(keys)   // array
// console.log(values)  // array
// console.log(entries)  // array

// for(const [keys, value] of Object.entries(user)){
//     console.log(`${keys}:${value}`)
// }



// array to object
const objectCheck =  Object.fromEntries(entries)
// console.log(objectCheck);

const arr = [1,2,3,4,5,6,7,8]
const newObj = Object.entries(arr)
// console.log(newObj)



const test = {
    name:"alpha",
    code:2256,
    password:"Alpha_2256_sec",
    otp:Math.round(Math.random()*10*1000)
}

// Object.freeze(test)  // no addable || no deletable 
// Object.seal(test) // only editable existing property || no add , delete

// delete test.otp
// test.nickName = "Shark"
// test.code = 3326

// to configure 
Object.defineProperty(test, "nickName", {
    value:"shark",   // nickName value
    writable:false,  // no-writable 
    enumerable:false, // loopable
    configurable:false // no add || no delete
})
// console.log(test)

// to check object configration 
const obj_elements =  Object.getOwnPropertyDescriptor(test, "nickName")
// console.log(obj_elements)