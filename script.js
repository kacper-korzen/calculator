'use strict';

let num1 = 0;
let num2 = 0;
let symbol = '';
let operatorClicked = false;

const Calculator = {
    num1 : 0,
    num2 : 0,
    symbol : '',
    operate() {
        switch (this.symbol) {
            case '+':
                return add(this.num1, this.num2);
                break;
            case '-':
                return subtract(this.num1, this.num2);
                break;
            case 'x':
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

// TODO: add validation
function setOperationComponents(str){
    const components = str.split(' ').sort();

    if (components.length < 3 || components.includes('')) {
        console.log("za mało", components);
    } else {
        console.log('dziala', components);
    }
}

function showInput(symbol) {
    const input = document.querySelector('.input');
    
    let inputValue = '';
    const operations = '+-/x';
    
    if (!isNaN(symbol)) {
        input.textContent += symbol;
    } else if (operations.includes(symbol) && !operatorClicked && input.innerHTML !== '&nbsp;') {
        input.textContent += ` ${symbol} `;
        operatorClicked = true; 

    } else if(symbol === '=') {
        // setOperationComponents(input.textContent);
        input.innerHTML = '&nbsp;';
        operatorClicked = false;
    }

    
}

const calculatorButtonsDiv = document.querySelector('.calculator-buttons');
const calculatorButtons = Array.from(calculatorButtonsDiv.querySelectorAll('button'));


calculatorButtons.map(button => {
    button.addEventListener('click', () => { showInput(button.textContent)});
});