let arr = [];


let enti = [
    '1235', 
    '4321', 
    '1234'
];


let enti2 = [
    '1234',
    '45667',
    '',
]; 

enti.map((e) => {
    arr.push(enti2.includes(e));
})


console.log(arr)