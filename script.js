

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
    } else if (operator === "/") {
        return divide;
    };
};

console.log("the test result of the operate function is " + operate(1, 5, "/"));

let num = [];
let num1 = "";
let num2 = "";
let operator = "";

const button7 = document.querySelector(".number7");
button7.addEventListener("click", ()=> {
num.push(7);
console.log(num);
});

const button8 = document.querySelector(".number8");
button8.addEventListener("click", ()=> {
num.push(8);
console.log(num);
});

const button9 = document.querySelector(".number9");
button9.addEventListener("click", ()=> {
num.push(9);
console.log(num);
});

const button4 = document.querySelector(".number4");
button4.addEventListener("click", ()=> {
num.push(4);
console.log(num);
});

const button5 = document.querySelector(".number5");
button5.addEventListener("click", ()=> {
num.push(5);
console.log(num);
});

const button6 = document.querySelector(".number6");
button6.addEventListener("click", ()=> {
num.push(6);
console.log(num);
});

const button1 = document.querySelector(".number1");
button1.addEventListener("click", ()=> {
num.push(1);
console.log(num);
});

const button2 = document.querySelector(".number2");
button2.addEventListener("click", ()=> {
num.push(2);
console.log(num);
});

const button3 = document.querySelector(".number3");
button3.addEventListener("click", ()=> {
num.push(3);
console.log(num);
});

const button0 = document.querySelector(".number0");
button0.addEventListener("click", ()=> {
num.push(0);
console.log(num);
});

const division = document.querySelector(".divideButton");
division.addEventListener("click", () => {
    if (num1 === ""){
        num1 = num.join("");
        console.log("num1 is " + num1);
        num = [];
        console.log("num is " + num);
        operator = "/";
        console.log("operator is " + operator);
    } else if (num1 !== "") {
        num2 = num.join("");
        console.log("num2 is " + num2);
        num = [];
        console.log("num is " + num);
        console.log("the total is " + operate(num1, num2, operator));
    };
});

const multiply = document.querySelector(".multiplyButton");
multiply.addEventListener("click", () => {
    if (num1 === ""){
        num1 = num.join("");
        console.log("num1 is " + num1);
        num = [];
        console.log("num is " + num);
        operator = "*";
        console.log("operator is " + operator);
    } else if (num1 !== "") {
        num2 = num.join("");
        console.log("num2 is " + num2);
        num = [];
        console.log("num is " + num);
        console.log("the total is " + operate(num1, num2, operator));
    };
});

const subtraction = document.querySelector(".subtractButton");
subtraction.addEventListener("click", () => {
    if (num1 === ""){
        num1 = num.join("");
        console.log("num1 is " + num1);
        num = [];
        console.log("num is " + num);
        operator = "-";
        console.log("operator is " + operator);
    } else if (num1 !== "") {
        num2 = num.join("");
        console.log("num2 is " + num2);
        num = [];
        console.log("num is " + num);
        console.log("the total is " + operate(num1, num2, operator));
    };
});