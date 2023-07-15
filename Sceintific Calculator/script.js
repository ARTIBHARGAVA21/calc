let displayValue = "";

function appendDigit(digit) {
  displayValue += digit;
  updateDisplay();
}

function updateDisplay() {
  document.getElementById("result").value = displayValue;
}

function clearDisplay() {
  displayValue = "";
  updateDisplay();
}

function deleteDigit() {
  displayValue = displayValue.slice(0, -1);
  updateDisplay();
}

function performOperation(operator) {
  displayValue += operator;
  updateDisplay();
}

function calculate() {
  try {
    displayValue = eval(displayValue);
    updateDisplay();
  } catch (error) {
    displayValue = "Error";
    updateDisplay();
  }
}

function calculateSquareRoot() {
  try {
    displayValue = Math.sqrt(eval(displayValue));
    updateDisplay();
  } catch (error) {
    displayValue = "Error";
    updateDisplay();
  }
}

function calculateExponent() {
  try {
    displayValue = eval(displayValue) ** 2;
    updateDisplay();
  } catch (error) {
    displayValue = "Error";
    updateDisplay();
  }
}

function calculateSin() {
  try {
    displayValue = Math.sin(eval(displayValue));
    updateDisplay();
  } catch (error) {
    displayValue = "Error";
    updateDisplay();
  }
}

function calculateCos() {
  try {
    displayValue = Math.cos(eval(displayValue));
    updateDisplay();
  } catch (error) {
    displayValue = "Error";
    updateDisplay();
  }
}

function calculateTan() {
  try {
    displayValue = Math.tan(eval(displayValue));
    updateDisplay();
  } catch (error) {
    displayValue = "Error";
    updateDisplay();
  }
}

function calculateLog() {
  try {
    displayValue = Math.log10(eval(displayValue));
    updateDisplay();
  } catch (error) {
    displayValue = "Error";
    updateDisplay();
  }
}
