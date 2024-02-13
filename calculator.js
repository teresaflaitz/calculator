function add(x,y) {
    return x + y;
};

function subtract(x,y) {
    return x - y;
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

function createButtons() {
    const buttons = document.querySelector("#buttons");
    const numbers = document.querySelector("#numbers");
    const operators = document.querySelector("#operators");
    const ops = ["+", "-", "×", "÷", "="];

    for(let i = 0; i <= 9; i++) {
        const button = document.createElement("button");
        button.id = i;
        button.textContent = i;
        button.addEventListener("click", function() {calcInput.push(i)});
        numbers.appendChild(button);
    };

    ops.forEach((i) => {
        const button = document.createElement("button");
        button.id = i;
        button.textContent = i;
        button.addEventListener("click", function() {calcInput.push(i)});
        operators.appendChild(button);
    });
};

function operate() {
    const operator = calcInput.find((item) => item === ("+" || "-" || "×" || "÷"));
    const calcString = calcInput.toString();

    switch(operator) {
        case "+":
            break;
        case "-":
            break;
        case "×":
            break;
        case "÷":
            break;
    };
};



createButtons();