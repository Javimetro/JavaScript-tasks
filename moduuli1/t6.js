'use strict';


let confirm1 = confirm('Should I calculate the square root?')
let text, numero;

if (confirm1 === true) {
  numero = Number(prompt('Anna numeron: '))
}
if (numero < 0) {
  text = 'The square root of a negative number is not defined';
}
if (numero >= 0) {
  text = Math.sqrt(numero)
}
else {
  confirm1 = false;
}

document.querySelector('#target').innerHTML = text;