// This exercise based  on reducing a finite set of values to 24 values representing the hours of the day. 
// THE PROBLEM
// You have an array with values between numeric and null which belong to an array of reading values of a sensor which gives readings every certain time corresponding to a whole day, you want to reduce the values obtained to a set of 24 values corresponding to the hours of the day [00,01,02,03,04,05,05,06,06,07,08,09,10,11,12,13,14,15,16,17,18,19,20,21,22,23]. 
// the array contains a total of 284 elements 

const arr = [1,12,3,4,5,6,7,8,9,10,11,20,50,null,null,null,null,null,
1,2,3,4,5,6,7,8,9,10,11,20,50,null,null,null,null,null,
1,2,3,4,5,6,7,8,9,10,11,20,50,null,null,null,null,null,
1,2,3,4,5,6,7,8,9,10,11,20,50,null,null,null,null,null,
null,null,null,null,null,null,,null,null,null,null,null,
null,null,null,null,null,,null,null,null,null,null,null,
24,22,55,677,3,6,2,123,null,5,6,7,8,9,10,11,20,null,null,
1,2,3,4,5,6,7,8,9,10,11,20,50,null,null,null,null,null,
1,2,3,4,5,6,7,8,9,10,11,20,50,null,null,null,null,null,
1,2,3,4,5,6,7,8,9,10,11,20,50,null,null,null,null,null,
1,2,3,4,5,6,7,8,9,1,1,56,50,null,null,null,null,null,
null,null,null,null,null,null,,null,null,null,null,null,
null,null,null,null,null,,null,null,null,null,null,null,
24,22,55,677,3,6,2,123,null,5,6,7,8,9,10,11,20,null,null,
1,2,3,4,5,6,7,8,9,10,11,20,50,null,null,null,null,null,
1,2,3,4,5,6,7,8,9,10,11,20,50,null,null,null,null,null,
24,22,55,677,3,6,2,123,null,5,6,7,8,9,10,11,20,null,null,
12,21,21];


const minutesBetweenHour = 60 / 5;
let indexCounter = 0,
    indexCounterInside = 0,
    contador = 0, 
    sum,
    newValues = [],
    newsummArr = [],
    currentItems = 0;

for (let index = 0; index < arr.length; index++) {
    if(indexCounter === minutesBetweenHour || contador === 0){
        indexCounter = 0;
        indexCounterInside = 0;
        newsummArr = [];
        for (let countStart = contador === 0 ? 0 : index ; countStart < index + minutesBetweenHour; countStart++) {
            newsummArr[indexCounterInside] = arr[countStart];
            indexCounterInside++;
        }

        sum = newsummArr.map((x) => {
            x = x === null || x === undefined ? 0 : x;
            return x;
        }).reduce((a , b) => a + b) ;
        newValues.push(sum)
        contador++;
    }
    indexCounter++;
}

console.log("mensaje" + "ashjabdibfa" + indexCounter)
console.log(`mensaje ${indexCounter} `)
// console.log(...newValues);

