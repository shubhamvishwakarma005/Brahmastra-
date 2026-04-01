// #1 
// Instance 

function tataCar(chasisNo, modelName){
    // make empty object 
    this.chasisNo = chasisNo;
    this.modelName = modelName;
    this.fuelLevel = 100;
}

// link empty object prototype with function prototype
tataCar.prototype.status = function(){
    return `Chassis:${this.chasisNo} || model:${this.modelName} || fuel:${this.fuelLevel}`
}

// bind with this keyword , whoever call 
const car_01 = new tataCar('123', "TataMaruti") 
const car_02 = new tataCar('321', "Mahindra Thar")

// return the value 
// console.log(car_01);
// console.log(car_02)


//  info when new keyword used 

// step :1 := make empty object 
// step :2 := link empty object prototype with function prototype
// step :3 := bind with this keyword , whoever call 
// step :4 := return the value 



// #2 
// Factory function which take refrence with it  
// diffrent one 

function trains(train_No, train_route){
    return {
        train_No,
        train_route,
        run(){
            `Train no ${this.train_No} run from ${this.train_route}`
        }
    }
}


const train_01 = trains(12321, "hwh to mum")
const train_02 = trains(12322, "mum to hwh")
// console.log(train_01)
// console.log(train_02)




// so these both method is used to build to share the method functionality so when "new" keyword used shared method 

// another one used to refrence and take whole functionality with it 

