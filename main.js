/* Getting the elements from the HTML file. */
const result = document.getElementById('viewer');
const warning = document.querySelector('.warning');
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
numBtns.forEach(
  (numberBtn) => (numberBtn.onclick = () => displayResult(numberBtn.innerText))
);

/**
 * If the result is 0, then clear the result and display the number. Otherwise, display the number.
 * @param number - the number that is clicked on the calculator
 */
const displayResult = (number) => {
  if (result.innerText.length >= 8) {
    warning.textContent = 'Up to 8 digits!';
    return;
  }

  if (result.innerText === '0') {
    result.innerText = '';
    result.innerText += number;
  } else {
    result.innerText += number;
  }

  warning.innerText = "Don't divide by 0";
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
    result.innerText.endsWith('.') ||
    result.innerText.length >= 8
  ) {
    return;
  } else if (result.innerText === '') {
    if (sign === '-') {
      result.innerText += sign;
    }
  } else {
    result.innerText += sign;
  }
  if (
    sign === '-' &&
    (result.innerText.endsWith('*') ||
      result.innerText.endsWith('/') ||
      result.innerText.endsWith('+'))
  ) {
    result.innerText += sign;
  }
};

/**
 * If the last character of the result is an operator, then remove it and evaluate the result. If the
 * result contains a division by 0, then display a warning. If the result is undefined, then display a
 * warning and set the result to 0
 */
const calculate = () => {
  if (
    result.innerText.endsWith('+') ||
    result.innerText.endsWith('-') ||
    result.innerText.endsWith('*') ||
    result.innerText.endsWith('/') ||
    result.innerText.endsWith('.')
  ) {
    warning.innerText = "Don't divide by 0";
    result.innerText = eval(result.innerText.slice(0, -1));
  } else if (result.innerText.includes('/0')) {
    warning.innerText = 'Division by 0!';
  } else {
    result.innerText = eval(result.innerText);
  }
  if (result.innerText === 'undefined') {
    warning.innerText = "Don't divide by 0";
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
