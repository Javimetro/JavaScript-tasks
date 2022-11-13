'use strict';

let n;

n = parseInt(prompt('Kuinka monta nopaa? '));
const lukulist = []


for (let i = 0; i < n; i++) {
  const noppa = Math.floor(Math.random() * 6 + 1);
  lukulist.push(noppa)
}

let summa = 0

for (const value of lukulist) {
  summa += value;
}

document.querySelector('#target').innerHTML = summa
