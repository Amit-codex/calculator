let currentInput = '';
let currentResult = 0;
let operator = null;

function updateDisplay() {
    document.getElementById('display').innerText = currentInput || currentResult;
}

function appendInput(value) {
    currentInput += value;
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    currentResult = 0;
    operator = null;
    updateDisplay();
}

function calculate() {
    if (currentInput) {
    currentResult = eval(currentInput);
    currentInput = '';
    updateDisplay();
    }
}

function undo() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}
