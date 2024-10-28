
let displayValue = document.querySelector('.display');
const numberButtons = document.querySelectorAll(".btn");
const operatorButtons = document.querySelectorAll('.operator')
const clearButton = document.querySelector(".clear-btn")
const equalButton = document.querySelector(".equal-btn");

//Functions for the calculation
function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) { 
  if (b === 0) {
    console.log("Cant divide by 0")
  } else { return a / b; }
}

let firstNumber = "";
let secondNumber = "";
let operators = null;
displayValue.textContent = "0";


// Calculator operator
function operator(firstNumber, operators, secondNumber) {
  let results;
  firstNumber = parseFloat(firstNumber);
  secondNumber = parseFloat(secondNumber);

  switch(operators) {
    case "+":
      results = add(firstNumber, secondNumber);
      console.log(results)
      break;
    case "-":
      results = subtract(firstNumber, secondNumber);
      break;
    case "*":
      results = multiply(firstNumber, secondNumber);
      break;
    case "/":
      results = divide(firstNumber, secondNumber);
      break;
  }

  return results;
}


// Functions to popullate the display
function handleNumbersDisplay(number) {
  if (displayValue.textContent.length > 9) {
    return;
  }
  //take the value from number
  let input = number.target.innerText;
  //add it to the display\
  if (displayValue.textContent === "0") {
    displayValue.textContent = input;
  } else {
    displayValue.textContent += input;
  }
  
  if (operators === null) {
    firstNumber  = displayValue.textContent;
  } else {
    displayValue.textContent = input;
    secondNumber += displayValue.textContent;
  }
  console.log('first',firstNumber);
  console.log('second', secondNumber);


}

function handleOperatorsDisplay(operator) {
  if (operators === null) {
    const operatorInput = operator.target.innerText;
    displayValue.textContent += operatorInput;
    operators = displayValue.textContent;
  } else {
    return;
  }
}


numberButtons.forEach((number) => {
  number.addEventListener("click", handleNumbersDisplay)});

operatorButtons.forEach((opera) => {
  opera.addEventListener('click', handleOperatorsDisplay)});


// Reset the display field when click clear button
function clearDisplay() {
  firstNumber = '';
  secondNumber = '';
  operators = null;
  displayValue.textContent = "0";
}

clearButton.addEventListener('click', clearDisplay);

// Get the result of the numbers
function getResult() {
  if (firstNumber, operators, secondNumber) {
    let result = operator(firstNumber, operator, secondNumber);
    displayValue.textContent = result;
    firstNumber = displayValue;
    secondNumber = "";
    operators = null;
  }
}

equalButton.addEventListener('click', getResult);