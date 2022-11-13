'use strict';

const vuosiluku1 = parseInt(prompt('Kirjoita ensimmäinen vuosiluvun: '));
const vuosiluku2 = parseInt(prompt('Kirjoita toinen vuosiluvun: '));

for (let i = vuosiluku1; i <= vuosiluku2; i++){
  if (i % 100 === 0 && i % 400 !== 0) {
    document.querySelector('#target').innerHTML += `<li>${i}</li>`
  } else if (i % 4 === 0 || i % 400 === 0) {
    document.querySelector('#target').innerHTML += `<li>${i}</li>`
  }
}

