
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

let num = [];
let num1 = "";
let num2 = "";
let operator = "";
let resultOfCalculation = "";
const screenContent = document.querySelector(".screen");

const button7 = document.querySelector(".number7");
button7.addEventListener("click", ()=> {
num.push(7);
console.log(num);
screenContent.textContent = num.join("");
screenContent.append;
});

const button8 = document.querySelector(".number8");
button8.addEventListener("click", ()=> {
num.push(8);
console.log(num);
screenContent.textContent = num.join("");
screenContent.append;
});

const button9 = document.querySelector(".number9");
button9.addEventListener("click", ()=> {
num.push(9);
console.log(num);
screenContent.textContent = num.join("");
screenContent.append;
});

const button4 = document.querySelector(".number4");
button4.addEventListener("click", ()=> {
num.push(4);
console.log(num);
screenContent.textContent = num.join("");
screenContent.append;
});

const button5 = document.querySelector(".number5");
button5.addEventListener("click", ()=> {
num.push(5);
console.log(num);
screenContent.textContent = num.join("");
screenContent.append;
});

const button6 = document.querySelector(".number6");
button6.addEventListener("click", ()=> {
num.push(6);
console.log(num);
screenContent.textContent = num.join("");
screenContent.append;
});

const button1 = document.querySelector(".number1");
button1.addEventListener("click", ()=> {
num.push(1);
console.log(num);
screenContent.textContent = num.join("");
screenContent.append;
});

const button2 = document.querySelector(".number2");
button2.addEventListener("click", ()=> {
num.push(2);
console.log(num);
screenContent.textContent = num.join("");
screenContent.append;
});

const button3 = document.querySelector(".number3");
button3.addEventListener("click", ()=> {
num.push(3);
console.log(num);
screenContent.textContent = num.join("");
screenContent.append;
});

const button0 = document.querySelector(".number0");
button0.addEventListener("click", ()=> {
num.push(0);
console.log(num);
screenContent.textContent = num.join("");
screenContent.append;
});

const buttonDecimal = document.querySelector(".decimalPoint");
buttonDecimal.addEventListener("click", ()=> {
num.push(".");
console.log(num);
screenContent.textContent = num.join("");
screenContent.append;
});



const buttonEquals = document.querySelector(".equalsButton");
buttonEquals.addEventListener("click", ()=> {
    num2 = Number(num.join(""));
    resultOfCalculation = operate(num1, num2, operator);
    screenContent.textContent = resultOfCalculation;
    screenContent.append;
    num = [];
    num2 = "";
});


const buttonClear = document.querySelector(".clearButton");
buttonClear.addEventListener("click", ()=> {
    num = [];
    num1 = "";
    num2 = "";
    operator = "";
    resultOfCalculation = "";
    screenContent.textContent = "";
    screenContent.append;

});

const division = document.querySelector(".divideButton");
division.addEventListener("click", () => {
    if (resultOfCalculation !== "") {
        num1 = resultOfCalculation;
        num2 = Number(num.join(""));
        operator = "/";
        resultOfCalculation = operate(num1, num2, operator);
        screenContent.textContent = resultOfCalculation;
        screenContent.append;
        num = [];
    } else if (num1 === ""){
        num1 = Number(num.join(""));
        num = [];
        operator = "/";
    } else if (num1 !== "") {
        num2 = Number(num.join(""));
        operator = "/";
        resultOfCalculation = operate(num1, num2, operator);
        screenContent.textContent = resultOfCalculation;
        screenContent.append;
        num = [];
        console.log("num is " + num);
        console.log("the total is " + resultOfCalculation);
    } else if (resultOfCalculation !== "") {
        num1 = resultOfCalculation;
        num2 = Number(num.join(""));
        operator = "/";
        resultOfCalculation = operate(num1, num2, operator);
        screenContent.textContent = resultOfCalculation;
        screenContent.append;
        num = [];

    }
});

const multiply = document.querySelector(".multiplyButton");
multiply.addEventListener("click", () => {
    if (resultOfCalculation !== "") {
        num1 = resultOfCalculation;
        num2 = Number(num.join(""));
        operator = "*";
        resultOfCalculation = operate(num1, num2, operator);
        screenContent.textContent = resultOfCalculation;
        screenContent.append;
        num = [];
    } else if (num1 === ""){
        num1 = Number(num.join(""));
        num = [];
        operator = "*";
    } else if (num1 !== "") {
        num2 = Number(num.join(""));
        operator = "*";
        resultOfCalculation = operate(num1, num2, operator);
        screenContent.textContent = resultOfCalculation;
        screenContent.append;
        num = [];
        console.log("num is " + num);
        console.log("the total is " + resultOfCalculation);
    } else if (resultOfCalculation !== "") {
        num1 = resultOfCalculation;
        num2 = Number(num.join(""));
        operator = "*";
        resultOfCalculation = operate(num1, num2, operator);
        screenContent.textContent = resultOfCalculation;
        screenContent.append;
        num = [];

    }
});

const subtraction = document.querySelector(".subtractButton");
subtraction.addEventListener("click", () => {
    if (resultOfCalculation !== "") {
        num1 = resultOfCalculation;
        num2 = Number(num.join(""));
        operator = "-";
        resultOfCalculation = operate(num1, num2, operator);
        screenContent.textContent = resultOfCalculation;
        screenContent.append;
        num = [];
    } else if (num1 === ""){
        num1 = Number(num.join(""));
        num = [];
        operator = "-";
    } else if (num1 !== "") {
        num2 = Number(num.join(""));
        operator = "-";
        resultOfCalculation = operate(num1, num2, operator);
        screenContent.textContent = resultOfCalculation;
        screenContent.append;
        num = [];
        console.log("num is " + num);
        console.log("the total is " + resultOfCalculation);
    } else if (resultOfCalculation !== "") {
        num1 = resultOfCalculation;
        num2 = Number(num.join(""));
        operator = "-";
        resultOfCalculation = operate(num1, num2, operator);
        screenContent.textContent = resultOfCalculation;
        screenContent.append;
        num = [];

    }
});

const addition = document.querySelector(".additionButton");
addition.addEventListener("click", () => {
    if (resultOfCalculation !== "") {
        num1 = resultOfCalculation;
        num2 = Number(num.join(""));
        operator = "+";
        resultOfCalculation = operate(num1, num2, operator);
        screenContent.textContent = resultOfCalculation;
        screenContent.append;
        num = [];
    } else if (num1 === ""){
        num1 = Number(num.join(""));
        num = [];
        operator = "+";
    } else if (num1 !== "") {
        num2 = Number(num.join(""));
        operator = "+";
        resultOfCalculation = operate(num1, num2, operator);
        screenContent.textContent = resultOfCalculation;
        screenContent.append;
        num = [];
        console.log("num is " + num);
        console.log("the total is " + resultOfCalculation);
    } else if (resultOfCalculation !== "") {
        num1 = resultOfCalculation;
        num2 = Number(num.join(""));
        operator = "+";
        resultOfCalculation = operate(num1, num2, operator);
        screenContent.textContent = resultOfCalculation;
        screenContent.append;
        num = [];

    }
});

