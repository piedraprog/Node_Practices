let arr = [1,2,3,4,5]
let sum = [];

// Write your code here
let allSums = arr.map((number)=>{
    sum = arr.reduce((previousValue, currentValue)=>{ 
        return previousValue + currentValue
    });
    return sum - number;
});


    
console.log(`${Math.min(...allSums)} ${Math.max(...allSums)}`)

