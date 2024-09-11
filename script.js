'use strict';

let num1 = 0;
let num2 = 0;
let operation = ' ';
let operatorClicked = false;
let resultClicked = false;
let dotClicked = false;

function Calculator(num1, num2, symbol) {
    this.num1 = num1;
    this.num2 = num2;
    this.symbol = symbol;
    this.result = 0;
}

Calculator.prototype.operate = function() {
    switch (this.symbol) {
        case '+':
            return add(this.num1, this.num2);
        case '-':
            return subtract(this.num1, this.num2);
        case 'x':
            return multiply(this.num1, this.num2);
        case '/':
            return divide(this.num1, this.num2);
        default:
            return "Error: Invalid operation";
    }
};

function add (num1, num2) {
    return (num1 + num2).toFixed(2);
}

function subtract (num1, num2) {
    return (num1 - num2).toFixed(2);
}

function multiply (num1, num2) {
    return (num1 * num2).toFixed(2);
}

function divide (num1, num2) {
    if (num2 === 0) {
        return 'Zero division error';
    }
    return (num1 / num2).toFixed(2);
}

// TODO: add validation
function calculate(str){
    const components = str.trim().split(operation);

    if (!components.length < 2 && !components.includes('') ||components.includes(' ')) {
        [num1, num2] = components;
        const calculate = new Calculator(parseFloat(num1), parseFloat(num2), operation);
        result.innerHTML = calculate.operate();        
    } else {
        input.innerHTML = str;
        enableButtons();
    }
}

function disableButtons() {
    calculatorButtons.map(button => {
        if (button.textContent !== 'AC') {
            button.setAttribute('disabled', true);
        }
    });
}

function enableButtons() {
    calculatorButtons.map(button => {
        if (button.textContent !== 'AC') {
            button.removeAttribute('disabled');
        }
    });
}


const input = document.querySelector('.input');
const result = document.querySelector('.result');
function showInput(symbol) {
    const operations = '+-/x';

    if (!isNaN(symbol)) {
        input.textContent += symbol;
    } else if (operations.includes(symbol) && !operatorClicked && input.innerHTML !== '&nbsp;') {
        input.textContent += `${symbol}`;
        operatorClicked = true; 
        operation = symbol;
        if (input.textContent.split(operation).length > 1) {
            dotClicked = false;
        }
    } else if(symbol === '=' && operatorClicked === true && input.textContent) {
        resultClicked = true;
        disableButtons();
        calculate(input.textContent);

    } else if(symbol === 'AC') {
        input.innerHTML = '&nbsp;';
        result.innerHTML = '0';
        enableButtons();
        operatorClicked = false;
        dotClicked = false;
    } else if(symbol === '←' && !input.textContent.includes(operations) && input.innerHTML !== '&nbsp;' ) {
        input.textContent = input.textContent.slice(0, -1);
        operatorClicked = false;
    } else if(symbol === '√') {
        disableButtons();
        result.innerHTML = Math.sqrt(input.textContent);
    } else if (symbol === '.' && !dotClicked) {
        dotClicked = true;
        input.textContent += symbol;
    }
    
}

const calculatorButtonsDiv = document.querySelector('.calculator-buttons');
const calculatorButtons = Array.from(calculatorButtonsDiv.querySelectorAll('button'));


calculatorButtons.map(button => {
    button.addEventListener('click', () => { 
        showInput(button.textContent)
    });
});