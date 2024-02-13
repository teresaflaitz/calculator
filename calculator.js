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
        if (i === "=") {
            button.addEventListener("click", operate);
        }
        else {
            button.addEventListener("click", function() {calcInput.push(i)});
        };
        operators.appendChild(button);
    });
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
    
    calcInput.length = 0;

    switch(operator) {
        case "+":
            console.log(add(x,y));
            return add(x,y);
            break;
        case "-":
            console.log(subtract(x,y));
            return subtract(x,y);
            break;
        case "×":
            console.log(multiply(x,y));
            return multiply(x,y);
            break;
        case "÷":
            console.log(divide(x,y));
            return divide(x,y);
            break;
    };
};



createButtons();