

function operate(num1, num2, operator) {
    const arr = [num1, num2];
    let add = arr.reduce((total, current) => total + current,0);
    let subtract = arr.reduce((total, current) => total - current);
    let multiply = arr.reduce((total, current) => total * current);
    let divide = arr.reduce((total, current) => total / current);
    if(operator === "+") {
        return add;
    } else if (operator === "-") {
        return subtract;
    } else if (operator === "*") {
        return multiply;
    } else{
        return divide;
    };
};

console.log("the function is " + operate(1, 5, "/"));

let num = [];
const button7 = document.querySelector(".number7");
button7.addEventListener("click", ()=> {
num.push(7);
console.log(num);
});
