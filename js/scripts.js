function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));

alert(number1 + ' plus ' + number2 + ' equals ' + add(number1, number2));
alert(number1 + ' minus ' + number2 + ' equals ' + subtract(number1, number2));
alert(number1 + ' times ' + number2 + ' equals ' + multiply(number1, number2));
alert(number1 + ' divided by ' + number2 + ' equals ' + divide(number1, number2));
