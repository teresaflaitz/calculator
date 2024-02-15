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

const screen = document.querySelector("#screen");
let newNumber = false;
let operatorPressed = false;
let resultDisplayed = false;

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
    else if (!isNaN(i)) {
        button.addEventListener("click", function() {
            storeInput(i);

            if(resultDisplayed) {
                screen.textContent = "";
                resultDisplayed = false;
            };

            if(newNumber){
                screen.textContent = i;
                newNumber = false;
            }
            else {
                screen.textContent = screen.textContent + i;
            };
            
        });
    }
    else {
        button.addEventListener("click", function() {
            if(operatorPressed){
                inputArr[0] = operate();
                inputArr[2] = "";
            }
            
            storeInput(i);
            operatorPressed = true;
            newNumber = true;
        });
    };
    return button;
};

const inputArr = ["", "", ""];
    

function storeInput(input) {
    if (!isNaN(input) && inputArr[1] === "") {
        inputArr[0]+=input;
    }
    else if (!isNaN(input) && inputArr[1] !== "") {
        inputArr[2]+=input;
    }
    else {
        inputArr[1]=input;
    };
};


function operate() {
    const op = inputArr[1];
    const x = inputArr[0];
    const y = inputArr[2];
    
    let result;

    inputArr[0] = "";
    inputArr[1] = "";
    inputArr[2] = "";
    
    switch(op) {
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

    resultDisplayed = true;
    newNumber = true;
    operatorPressed = false;

    return result;
};

generateButtons();