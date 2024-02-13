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

console.log(add(1,2));
console.log(subtract(1,2));
console.log(multiply(1,2));
console.log(divide(1,2));

function createButtons() {
    const buttons = document.querySelector("#buttons");
    const numbers = document.querySelector("#numbers");
    const operators = document.querySelector("#operators");
    const ops = ["+", "-", "×", "÷"];

    for(let i = 0; i <= 9; i++) {
        const button = document.createElement("button");
        button.id = i;
        button.textContent = i;
        numbers.appendChild(button);
    };

    ops.forEach((i) => {
        const button = document.createElement("button");
        button.id = i;
        button.textContent = i;
        operators.appendChild(button);
    });
};

createButtons();