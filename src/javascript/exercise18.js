const inputString = "1_1685026928756";

const removePrefix = str => str.split('_')[1];

const numbersAfterUnderscore = removePrefix(inputString);
console.log(numbersAfterUnderscore); // Resultado: "1685026928756"
