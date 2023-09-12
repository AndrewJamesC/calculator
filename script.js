const arr = [5, 10]; //for the purpose of testing the functions are working correctly
let add = arr.reduce((total, current) => total + current,0);

console.log(add);
let subtract = arr.reduce((total, current) => total - current);

console.log(subtract);

let multiply = arr.reduce((total, current) => total * current);

console.log(multiply);

let divide = arr.reduce((total, current) => total / current);

console.log(divide);