// JAVASCRIPT @piaseckijulian
const result = document.getElementById('viewer');
const numBtns = document.querySelectorAll('.num');

const clearBtn = document.getElementById('clear');
const dotBtn = document.getElementById('dot');
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
const multiplyBtn = document.getElementById('multiply');
const divisionBtn = document.getElementById('divide');
const equalBtn = document.getElementById('equals');

numBtns.forEach((numberButton) => {
  numberButton.onclick = () => displayResult(numberButton);
});

const displayResult = (number) => {
  if (result.innerText === '0') {
    result.innerText = '';
    result.innerText += number.innerText;
  } else {
    result.innerText += number.innerText;
  }
};

const operation = (sign) => {
  if (
    result.innerText.endsWith('+') ||
    result.innerText.endsWith('-') ||
    result.innerText.endsWith('*') ||
    result.innerText.endsWith('/') ||
    result.innerText.endsWith('.')
  ) {
    return;
  } else if (result.innerText === '') {
    if (sign === '-') {
      result.innerText += sign;
    } else {
      return;
    }
  } else {
    result.innerText += sign;
  }
};

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
};

clearBtn.onclick = () => (result.innerText = '');
plusBtn.onclick = () => operation('+');
minusBtn.onclick = () => operation('-');
multiplyBtn.onclick = () => operation('*');
divisionBtn.onclick = () => operation('/');
dotBtn.onclick = () => operation('.');
equalBtn.onclick = () => calculate();

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
    if (result.innerText === '0') {
      result.innerText = '';
      result.innerText += e.key;
    } else {
      result.innerText += e.key;
    }
  }
});
