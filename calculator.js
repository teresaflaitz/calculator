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