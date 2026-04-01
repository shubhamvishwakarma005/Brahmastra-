const pritiviraj={
    name:"pritiviraj",
    generation:"grandfather",
    business:'movie production',
    assets:"5000cr",
    food(){
        return `${this.name} cooks delicious family dish`
    }
}

// console.log(pritiviraj)

const raj = Object.create(pritiviraj)
raj.name = "raj"
raj.generation = "father"
raj.business = "run theater"
raj.assets = "8000cr"
raj.build = function(){
    return `${this.name} build new house`
}
// console.log(raj);

// console.log(raj.food());
// console.log(raj.build());


const ranbir = Object.create(raj)
ranbir.name ="ranbir",
ranbir.generation = "son",
ranbir.business = "direct movies",
ranbir.assets="10000cr"
ranbir.production = function(){
    return `${this.name} start kapoor production house `
}

// console.log(ranbir.food());
// console.log(ranbir.build());
// console.log(ranbir.production());



// polyfill 

// const name="shubham"
// const info = function(){}

Array.prototype.last = function(){
    return this[this.length -1]
}

// console.log([1,2,3].last());
// console.log(["shub", "krtik", "sudh"].last())


Array.prototype.mapTwo = function(){
    return this.map(e=>e*2)
}

// console.log([1,2,3].mapTwo());



//  Task 

// polyfill library 
// map , forEach , reduce 

// const names = ["shubham","anjali","simran", "dipesh", "sweety"]

// Array.prototype.foreach = function(){
//     return this.forEach(er=>console.log(er));
// }

// names.foreach()

// interview
// introduce own map, reduce, forEach

