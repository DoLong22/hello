function addWithX(x){
    return function(y){
        return x+y;
    }
}

const addWith = addWithX(10);
console.log(addWith); //[Function]

console.log(addWith(5));//15



