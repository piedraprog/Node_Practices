

// a function that takes two number an initial an final numbers and returns an array of its digits
// make the second number +1 to include it in the array
function convertToArr(number1: number, number2?: number) {
    
    let array: number[] = [];

    if(number2 === undefined) {
        number2 = number1; number1 = 1;
    }
    
    if (number1 <= number2) {
        for (let i: number = number1; i <= number2; i++) {
            array.push(i);
        }
    } else {
        for (let i: number = number1; i >= number2; i--) {
            array.push(i);
        }
    }

    return array;
}

console.log(convertToArr(5)) 