function flatten(value){
    return value.flat(Infinity)
}

console.log(flatten([1,2,3,[10,20,30,[100,200,300]]]));
