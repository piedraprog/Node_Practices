// This exercise based  on reducing a finite set of values to 24 values representing the hours of the day. 
// THE PROBLEM
// You have an array with values between numeric and null which belong to an array of reading values of a sensor which gives readings every certain time corresponding to a whole day, you want to reduce the values obtained to a set of 24 values corresponding to the hours of the day [00,01,02,03,04,05,05,06,06,07,08,09,10,11,12,13,14,15,16,17,18,19,20,21,22,23]. 
// the array contains a total of 284 elements 


arr = [
    1,2,3,4,5,6,7,8,9,10,11,20,50,null,null,null,null,null,
    1,2,3,4,5,6,7,8,9,10,11,20,50,null,null,null,null,null,
    1,2,3,4,5,6,7,8,9,10,11,20,50,null,null,null,null,null,
    1,2,3,4,5,6,7,8,9,10,11,20,50,null,null,null,null,null,
    null,null,null,null,null,null,,null,null,null,null,null,
    null,null,null,null,null,,null,null,null,null,null,null,
    24,22,55,677,3,6,2,123,null,5,6,7,8,9,10,11,20,null,null,
    1,2,3,4,5,6,7,8,9,10,11,20,50,null,null,null,null,null,
    1,2,3,4,5,6,7,8,9,10,11,20,50,null,null,null,null,null,
    1,2,3,4,5,6,7,8,9,10,11,20,50,null,null,null,null,null,
    1,2,3,4,5,6,7,8,9,10,11,20,50,null,null,null,null,null,
    null,null,null,null,null,null,,null,null,null,null,null,
    null,null,null,null,null,,null,null,null,null,null,null,
    24,22,55,677,3,6,2,123,null,5,6,7,8,9,10,11,20,null,null,
    1,2,3,4,5,6,7,8,9,10,11,20,50,null,null,null,null,null,
    1,2,3,4,5,6,7,8,9,10,11,20,50,null,null,null,null,null,
    24,22,55,677,3,6,2,123,null,5,6,7,8,9,10,11,20,null,null,
    12,21,21
];

newValues = [];
newsummArr = [];
sum;

currentItems = 0;
minutesBetweenHour = 60 / 5;  
console.log("🚀 ~ file: index.js ~ line 28 ~ minutesBetweenHour", minutesBetweenHour)

let indexCounter = 0;
let contador = 0;

for (let index = 0; index < arr.length; index++) {
    if(indexCounter === minutesBetweenHour || indexCounter === 0){
        
        console.log('entro', contador + 1, index)

        for (let countStart = index ; countStart < index + minutesBetweenHour; countStart++) {
            console.log('valor del array 2',countStart)
            if(countStart === 287) console.log("arr")
        }

        
        contador++;
    }
    indexCounter++;
}

console.log(arr.length)


// console.log(sum, newValues)