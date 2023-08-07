

let number = 5;



const numberToArray = (number) => {
    let array = [];
    for (let i = 0; i < number ; i++) {
        array.push(i);
    }
    return array ;
}


console.log(numberToArray(number));


// a function that takes two number an initial an final numbers and returns an array of its digits

const numberToArray2 = (number1, number2) => {
    let array = [];
    for (let i = number1 ; i < number2 ; i++) {
        array.push(i);
    }
    return array ;
}

console.log(numberToArray2(5, 11))