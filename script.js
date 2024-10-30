
let displayValue = document.querySelector('.display');
const numberButtons = document.querySelectorAll(".btn");
const operatorButtons = document.querySelectorAll('.operator')
const clearButton = document.querySelector(".clear-btn")
const equalButton = document.querySelector(".equal-btn");
const backspace = document.querySelector(".backspace");

//Functions for the calculation
function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) { 
  if (b === 0) {
    return "Cant divide by 0";
  } else { return a / b; }
}
function remaining(a, b) {return a % b};

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
    case "%":
      results = remaining(firstNumber, secondNumber);
      break
  }

   if (results === Number(results)) {
    return Math.round(results * 10) / 10;
   } else {
    return results = "NO NO NO";
   }
}

// Functions to popullate the display
function handleNumbersDisplay(number) {
  if (displayValue.textContent.length > 9) {
    return;
  }

  //take the value from number
  let input = number.target.innerText;

 //add it to the display\
  if (displayValue.textContent === "0" || firstNumber === "NO NO NO") {
     displayValue.textContent = input;
    if (input === ".") {
      displayValue.textContent = "0";
      displayValue.textContent += input;
    }
  } else {
    //fix the decimal
    if (input === ".") {
      if (displayValue.textContent.includes(input) && input.includes(input)) return;
    }
      displayValue.textContent += input;
  } 
  
  if (firstNumber === "NO NO NO") {
    displayValue.textContent = input;
    if (input === ".") {
      displayValue.textContent = "0";
      displayValue.textContent += input;
    }
  }

  // Get first number and second num values
  if (operators === null) {
    firstNumber = displayValue.textContent;

  } else {
    displayValue.textContent = input;
    // fix the decimal
    if (displayValue.textContent === "0") {
      displayValue.textContent = input;
    }
    secondNumber += displayValue.textContent;
    displayValue.textContent = secondNumber;
  }

  console.log('first',firstNumber);
  console.log('second', secondNumber);
}


function handleOperatorsDisplay(op) {
  // Prevent puting operator at the begining
  if (firstNumber !== "0" && operators === null && displayValue.textContent === "0") {
    return;
  }

  
  if (operators === null) {
    if (firstNumber === "NO NO NO") {
      return;
    }
    const operatorInput = op.target.innerText;
    displayValue.textContent = operatorInput;
    operators = operatorInput;
    displayValue.textContent = operators;
  } else {
    if (firstNumber, operators, secondNumber) {
      let result = operator(firstNumber, operators, secondNumber);
      displayValue.textContent = result;
      firstNumber = displayValue.textContent;
      secondNumber = "";
      operators = null;
      console.log(result);
      console.log(displayValue.textContent);
    }
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

function deleteOneKey() {
  displayValue.textContent = displayValue
  .textContent.length === 1 ? 0 : displayValue.textContent.substring(0, displayValue.textContent.length - 1)

  // update first and second number
  firstNumber = displayValue.textContent;
  if (operators !== null) {
    secondNumber = displayValue.textContent
  }
}

// Get the result of the numbers
function getResult() {
  if (firstNumber, operators, secondNumber) {
    let result = operator(firstNumber, operators, secondNumber);
    displayValue.textContent = result;
    firstNumber = displayValue.textContent;
    secondNumber = "";
    operators = null;
    console.log(result);
    console.log(displayValue.textContent);
  }
}

equalButton.addEventListener('click', getResult);

backspace.addEventListener('click', deleteOneKey);