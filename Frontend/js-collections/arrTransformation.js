
// string to Array
const str = "ELEPHANDINTHEROOM"
const str2 = "BEAMAN"
const str3 = "MANOFOWNWORDS"
//#1
// console.log(str.split(""))  
// #2
// console.log(Array.from(str)) 


// multiple mearged array
const multiMergeArr = Array.of(str, str2, str3)
// console.log(multiMergeArr) // multi-mearged array


// Array to string 
const propsElemt = ["mouse", "keyboard", "pen", "copy", "books"]
const names = ["ram", "shyam", "shiv", "krishna", "hanuman"]
// console.log(names.join())


// merge Array
const merArr = propsElemt.concat(names)
const mearge2 = [...propsElemt, ...names] 


// search 
const search = names.includes("shiv") // to check exist or not
const findIndex = propsElemt.indexOf("pen")
const findElements = propsElemt.find((e)=> e === "pen") // find element by condition
const indexFinder = propsElemt.findIndex((i)=> i ==="copy") // find Index by conditin
// console.log(indexFinder)


