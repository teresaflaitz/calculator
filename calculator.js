function add(x,y) {
    return Number(x) + Number(y);
};

function subtract(x,y) {
    return Number(x) - Number(y);
};

function multiply(x,y) {
    return x * y;
};

function divide(x,y) {
    if(y == 0) {
        return "ERROR";
    }
    return x / y;
};

const calcInput = [];
const screen = document.querySelector("#screen");

function generateButtons() {
    generateNumButtons();
    generateOpButtons();
};

function generateNumButtons() {
    const numbers = document.querySelector("#numbers");
    
    for(let i = 9; i >= 0; i--) {
        numbers.appendChild(populateButton(i));
    };
};

function generateOpButtons() {
    const operators = document.querySelector("#operators");
    const ops = ["+", "-", "×", "÷", "="];

    ops.forEach((i) => {
        operators.appendChild(populateButton(i));
    });
};

function populateButton(i) {
    const button = document.createElement("button");
        button.id = i;
        button.textContent = i;
        if (i === "=") {
            button.addEventListener("click", operate);
        }
        else {
            button.addEventListener("click", function() {
                calcInput.push(i)
                screen.textContent = screen.textContent + i;
            });
        };
    return button;
};



function operate() {
    //console.log(calcInput);
    const operator = calcInput.find((item) => item === "+" || item === "-" || item === "×" || item === "÷");
    //console.log(operator);
    const calcString = calcInput.join("");
    //console.log(calcString);
    const numArray = calcString.split(operator);
    //console.log(numArray);
    
    let x = numArray[0];
    let y = numArray[1];
    let result;
    
    calcInput.length = 0;

    switch(operator) {
        case "+":
            result = add(x,y);
            break;
        case "-":
            result = subtract(x,y);
            break;
        case "×":
            result = multiply(x,y);
            break;
        case "÷":
            result = divide(x,y);
            break;
    };
    screen.textContent = result;
};

function showResult() {

};



generateButtons();