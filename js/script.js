var display = document.querySelector('.display');
var buttons = document.querySelectorAll('.btn');
var firstNumber = null;
var secondNumber = null;
var operator = null;

function handleButtonClick(button) {
  var buttonText = button.textContent;

  switch (button.id) {
    case 'ac':
      display.textContent = "0";
      firstNumber = null;
      operator = null;
      break;
    case '±':
      display.textContent = parseFloat(display.textContent) * -1;
      break;
    case 'percent':
      display.textContent = (parseFloat(display.textContent) / 100).toFixed(2);
      break;
    case 'num':
      if (display.textContent === '0') {
        display.textContent = buttonText;
      } else {
        display.textContent += buttonText;
      }
      break
    case 'addition':
    case 'subtraction':
    case 'multiplication':
    case 'division':
      if (firstNumber === null) {
        firstNumber = parseFloat(display.textContent);
        operator = button.id;
        display.textContent = '0';
      }
      break;
    case 'equal':
      if (firstNumber !== null && operator !== null) {
        secondNumber = parseFloat(display.textContent);
        switch (operator) {
          case 'addition':
            display.textContent = (firstNumber + secondNumber).toLocaleString('es-ES');
            break;
          case 'subtraction':
            display.textContent = (firstNumber - secondNumber).toLocaleString('es-ES');
            break;
          case 'multiplication':
            display.textContent = (firstNumber * secondNumber).toLocaleString('es-ES');
            break;
          case 'division':
            if (secondNumber !== 0) {
              display.textContent = (firstNumber / secondNumber).toLocaleString('es-ES');
            } else {
              display.textContent = "Error";
            }
            break;
        }
        firstNumber = null;
        secondNumber = null;
        operator = null;
      }
      break;
  }
}

buttons.forEach(function (button) {
  button.addEventListener('click', function () {
    handleButtonClick(button);
  });
});