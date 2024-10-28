
let displayValue = document.querySelector('.display');
const numberButtons = document.querySelectorAll(".btn");
const operatorButtons = document.querySelectorAll('.operator')
const clearButton = document.querySelector(".clear-btn")


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
let operators = "";
displayValue.textContent = "0";


// Calculator operator
function operator(firstNumber, operators, secondNumber) {
  let results;

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
  //take the value from number
  const numberInput = number.target.innerText;
  console.log(numberButtons);
  //add it to the display
  displayValue.textContent += numberInput;

}

function handleOperatorsDisplay(operator) {
  const operatorInput = operator.target.innerText;
  displayValue.textContent = operatorInput;
}


numberButtons.forEach((number) => {
  number.addEventListener("click", handleNumbersDisplay)});

operatorButtons.forEach((opera) => {
  opera.addEventListener('click', handleNumbersDisplay)});


// Reset the display field when click clear button
function clearDisplay() {
  firstNumber = '';
  secondNumber = '';
  operators = null;
  displayValue.textContent = "0";
}

clearButton.addEventListener('click', clearDisplay);