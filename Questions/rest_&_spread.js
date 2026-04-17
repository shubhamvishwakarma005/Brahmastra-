// Rest → values ko ek array me collect karta hai

function names(...peoples) {
    return peoples
}
// console.log(names("ram", "shyam", "abhimanyu", "bheem"))


// Spread → array/object ko expand ya copy karta hai

const regisPlyer = ["ram", "shyam", "abhimanyu", "bheem"]
const players = [...regisPlyer]
// console.log(`Players names are : ${players}`)


const fruits = ["apple", "banana", "mango"];
const frt = fruits.join(" | ")
// console.log(frt);


function multiNum(...nums) {
    let total = 1;

    for (let i = 0; i < nums.length; i++) {
        total *= nums[i]
    }
    return total
}
// console.log(multiNum(2,3,4));

function multipleNum(...nums) {
    return nums.reduce((acc, curr) => acc * curr, 1)
}
// console.log(multipleNum(2,3,4))


// ******************* Destructuring ************************
const user = {
    name: "rahul",
    age: 25,
    city: "Delhi"
};

const { name: userName, age: userAge } = user
console.log(userName, userAge);
