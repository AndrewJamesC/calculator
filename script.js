
function operate(num1, num2, operator) {
    const arr = [num1, num2];
    let add = arr.reduce((total, current) => total + current,0);
    let subtract = arr.reduce((total, current) => total - current);
    let multiply = arr.reduce((total, current) => total * current,1);
    let divide = arr.reduce((total, current) => total / current);
    if(operator === "+") {
        return add.toFixed(3);
    } else if (operator === "-") {
        return subtract.toFixed(3);
    } else if (operator === "*") {
        return multiply.toFixed(3);
    } else if (operator === "/") {
        return divide.toFixed(3);
    };
};

let num = [];
let num1 = "";
let num2 = "";
let operator = "";
let resultOfCalculation = "";
let equals = "";
const screenContent = document.querySelector(".screen");

const button7 = document.querySelector(".number7");
button7.addEventListener("click", ()=> {
num.push(7);
screenContent.textContent = num.join("");
screenContent.append;
});

const button8 = document.querySelector(".number8");
button8.addEventListener("click", ()=> {
num.push(8);
screenContent.textContent = num.join("");
screenContent.append;
});

const button9 = document.querySelector(".number9");
button9.addEventListener("click", ()=> {
num.push(9);
screenContent.textContent = num.join("");
screenContent.append;
});

const button4 = document.querySelector(".number4");
button4.addEventListener("click", ()=> {
num.push(4);
screenContent.textContent = num.join("");
screenContent.append;
});

const button5 = document.querySelector(".number5");
button5.addEventListener("click", ()=> {
num.push(5);
screenContent.textContent = num.join("");
screenContent.append;
});

const button6 = document.querySelector(".number6");
button6.addEventListener("click", ()=> {
num.push(6);
screenContent.textContent = num.join("");
screenContent.append;
});

const button1 = document.querySelector(".number1");
button1.addEventListener("click", ()=> {
num.push(1);
screenContent.textContent = num.join("");
screenContent.append;
});

const button2 = document.querySelector(".number2");
button2.addEventListener("click", ()=> {
num.push(2);
screenContent.textContent = num.join("");
screenContent.append;
});

const button3 = document.querySelector(".number3");
button3.addEventListener("click", ()=> {
num.push(3);
screenContent.textContent = num.join("");
screenContent.append;
});

const button0 = document.querySelector(".number0");
button0.addEventListener("click", ()=> {
num.push(0);
screenContent.textContent = num.join("");
screenContent.append;
});

const buttonDecimal = document.querySelector(".decimalPoint");
buttonDecimal.addEventListener("click", ()=> {
num.push(".");
screenContent.textContent = num.join("");
screenContent.append;
});



const buttonEquals = document.querySelector(".equalsButton");
buttonEquals.addEventListener("click", ()=> {
    if (num.length === 0){
        
    }else if (resultOfCalculation === ""){
        num2 = Number(num.join(""));
        resultOfCalculation = operate(num1, num2, operator);
        screenContent.textContent = resultOfCalculation;
        screenContent.append;
        num = [];
        num1 = resultOfCalculation;
        num2 = "";
        operator = "";
    } else{
        num1 = resultOfCalculation;
        num2 = Number(num.join(""));
        resultOfCalculation = operate(num1, num2, operator);
        screenContent.textContent = resultOfCalculation;
        screenContent.append;
        num = [];
        operator = "+";
    }
});


const buttonClear = document.querySelector(".clearButton");
buttonClear.addEventListener("click", ()=> {
    num = [];
    num1 = "";
    num2 = "";
    operator = "";
    resultOfCalculation = "";
    error = "";
    screenContent.textContent = "";
    screenContent.append;

});

const division = document.querySelector(".divideButton");
division.addEventListener("click", () => {
    if(num.length === 0 && resultOfCalculation !== ""){
        operator = "/";
    }else if (num.length === 0 && resultOfCalculation === ""){

    } else if(num1 === ""){
        num1 = Number(num.join(""));
        operator = "/";
        num = [];
    } else if(num2 === "" && resultOfCalculation === ""){
        num2 = Number(num.join(""));
        resultOfCalculation = operate(num1, num2, operator);
        screenContent.textContent = resultOfCalculation;
        screenContent.append;
        num = [];
        operator = "/";
    } else if (resultOfCalculation !== ""){
        num1 = resultOfCalculation;
        num2 = Number(num.join(""));
        resultOfCalculation = operate(num1, num2, operator);
        screenContent.textContent = resultOfCalculation;
        screenContent.append;
        num = [];
        operator = "/";
    }
});


const multiply = document.querySelector(".multiplyButton");
multiply.addEventListener("click", () => {
    if(num.length === 0 && resultOfCalculation !== ""){
        operator = "*";
    }else if (num.length === 0 && resultOfCalculation === ""){

    }else if(num1 === ""){
        num1 = Number(num.join(""));
        operator = "*";
        num = [];
    } else if(num2 === "" && resultOfCalculation === ""){
        num2 = Number(num.join(""));
        resultOfCalculation = operate(num1, num2, operator);
        num = [];
        screenContent.textContent = resultOfCalculation;
        screenContent.append;
        operator = "*";
        }  else if (resultOfCalculation !== ""){
        num1 = resultOfCalculation;
        num2 = Number(num.join(""));
        resultOfCalculation = operate(num1, num2, operator);
        screenContent.textContent = resultOfCalculation;
        screenContent.append;
        num = [];
        operator = "*";
    }
});


const subtraction = document.querySelector(".subtractButton");
subtraction.addEventListener("click", () => {
    if(num.length === 0 && resultOfCalculation !== ""){
        operator = "-";
    }else if (num.length === 0 && resultOfCalculation === ""){

    } else if(num1 === ""){
        num1 = Number(num.join(""));
        operator = "-";
        num = [];
    } else if(num2 === "" && resultOfCalculation === ""){
        num2 = Number(num.join(""));
        resultOfCalculation = operate(num1, num2, operator);
        num = [];
        screenContent.textContent = resultOfCalculation;
        screenContent.append;
        operator = "-";
    } else if (resultOfCalculation !== ""){
        num1 = resultOfCalculation;
        num2 = Number(num.join(""));
        resultOfCalculation = operate(num1, num2, operator);
        screenContent.textContent = resultOfCalculation;
        screenContent.append;
        num = [];
        operator = "-";
    }
});


const addition = document.querySelector(".additionButton");
addition.addEventListener("click", () => {
    if(num.length === 0 && resultOfCalculation !== ""){
        operator = "+";
    }else if (num.length === 0 && resultOfCalculation === ""){
        } else if(num1 === ""){
        num1 = Number(num.join(""));
        operator = "+";
        num = [];
    } else if(num2 === "" && resultOfCalculation === ""){
        num2 = Number(num.join(""));
        resultOfCalculation = operate(num1, num2, operator);
        num = [];
        screenContent.textContent = resultOfCalculation;
        screenContent.append;
        operator = "+";
        } else if (resultOfCalculation !== ""){
        num1 = resultOfCalculation;
        num2 = Number(num.join(""));
        resultOfCalculation = operate(num1, num2, operator);
        screenContent.textContent = resultOfCalculation;
        screenContent.append;
        num = [];
        operator = "+";
    }
});

