// This is a exercise to shuffle an array con be use to simulate a shuffle of a deck 

let arr = [];

var poles = ["B","E","M","C"];

var values = ["1","2","3","4","5","6",
            "7","10","11","12"]; 


poles.forEach( pole => {
    values.forEach(value => {
        arr.push(`${value}${pole}`)
    })
});



arr.sort(() => Math.random() - 0.5)
console.log(arr)


// let current;
// let elradom;
// let elcontainer;

// arr.map((card,index) => {
//     let random = getRandomIntInclusive(); 
//     current = arr[index];
//     arr[index] = arr[random];
//     arr[random] = current;
// })


// function getRandomIntInclusive() {
//     min = Math.ceil(0);
//     max = Math.floor(39);
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }


