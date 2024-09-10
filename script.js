
const Calculator = {
    num1 : 0,
    num2 : 0,
    symbol : '+',
    operate() {
        switch (this.symbol) {
            case '+':
                return add(this.num1, this.num2);
                break;
            case '-':
                return subtract(this.num1, this.num2);
                break;
            case '*':
                return multiply(this.num1, this.num2);
                break;
            case '/':
                return divide(this.num1, this.num2);
                break;
            default:
                return "Error: Invalid operation";
        }
    }
};

function add (num1, num2) {
    return num1 + num2
}

function subtract (num1, num2) {
    return num1 - num2
}

function multiply (num1, num2) {
    return num1 * num2;
}

function divide (num1, num2) {
    if (num2 === 0) {
        return 'Error: Cannot divide by zero'
    }
    return num1 / num2;
}