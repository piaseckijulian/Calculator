// JAVASCRIPT @piaseckijulian

/* Getting the elements from the HTML file. */
const result = document.getElementById('viewer');
const numBtns = document.querySelectorAll('.num');
const clearBtn = document.getElementById('clear');
const dotBtn = document.getElementById('dot');
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
const multiplyBtn = document.getElementById('multiply');
const divisionBtn = document.getElementById('divide');
const equalBtn = document.getElementById('equals');

/* A forEach loop that is looping through the numBtns and adding an event listener to each
element */
numBtns.forEach((numberBtn) => {
  numberBtn.onclick = () => displayResult(numberBtn.innerText);
});

/**
 * If the result is 0, then clear the result and display the number. Otherwise, display the number.
 * @param number - the number that is clicked on the calculator
 */
const displayResult = (number) => {
  if (result.innerText === '0') {
    result.innerText = '';
    result.innerText += number;
  } else {
    result.innerText += number;
  }
};

/**
 * If the last character of the result is not an operator, then add the operator to the result
 * @param sign - the sign of the operation
 */
const operation = (sign) => {
  if (
    result.innerText.endsWith('+') ||
    result.innerText.endsWith('-') ||
    result.innerText.endsWith('*') ||
    result.innerText.endsWith('/') ||
    result.innerText.endsWith('.')
  ) {
  } else if (result.innerText === '') {
    if (sign === '-') {
      result.innerText += sign;
    }
  } else {
    result.innerText += sign;
  }
  if (
    sign === '-' &&
    result.innerText.endsWith('*') ||
    result.innerText.endsWith('/') || result.innerText.endsWith('+'))
   {
    result.innerText += sign;
  }
};

/**
 * If the last character of the result is an operator, then evaluate the result without the last
 * character. If the result includes a division by 0, then display an error message. If the result is
 * undefined, then display 0. Otherwise, evaluate the result
 */
const calculate = () => {
  if (
    result.innerText.endsWith('+') ||
    result.innerText.endsWith('-') ||
    result.innerText.endsWith('*') ||
    result.innerText.endsWith('/') ||
    result.innerText.endsWith('.')
  ) {
    result.innerText = eval(result.innerText.slice(0, -1));
  } else if (result.innerText.includes('/0')) {
    result.innerText = 'Division by 0';
    setTimeout(() => (result.innerText = ''), 1000);
  } else {
    result.innerText = eval(result.innerText);
  }
  if (result.innerText === 'undefined') {
    result.innerText = '0';
  }
};

/* Adding an event listener to each button. */
clearBtn.onclick = () => (result.innerText = '');
plusBtn.onclick = () => operation('+');
minusBtn.onclick = () => operation('-');
multiplyBtn.onclick = () => operation('*');
divisionBtn.onclick = () => operation('/');
dotBtn.onclick = () => operation('.');
equalBtn.onclick = () => calculate();

/* Adding an event listener to the document. */
document.addEventListener('keydown', function (e) {
  if (e.key === '+') {
    operation(e.key);
  } else if (e.key === '-') {
    operation(e.key);
  } else if (e.key === '*') {
    operation(e.key);
  } else if (e.key === '/') {
    operation(e.key);
  } else if (e.key === '.') {
    operation(e.key);
  } else if (e.key === '=') {
    calculate();
  } else if (e.key === 'c') {
    result.innerText = '';
  }
  if (e.key in [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) {
    displayResult(e.key);
  }
});
