const user = {
    name:'anony',
    email:'anony101@gmail.com',
    userId:101,
    nickName : ["anonymoust", "babu", "sona"],

    address:function(){
        return {country:"IND", state:"JH", dist:"KOD"}
    }
}

// console.log(user['nickName'])
// console.log("name" in user);

// check existing values 
// console.log(user.hasOwnProperty('toString'))


// *****************Key || value ***********************

// for( const value in user){
//     console.log(value)
// }


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

// object of array 
const objectCheck =  Object.fromEntries(entries)
console.log(objectCheck);
