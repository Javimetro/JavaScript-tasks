'use strict';

const koirat = []

for (let i = 1; i<=6; i++){
  koirat.push(prompt(`syötä ${i} koiran nimen: `));
}
koirat.sort();
koirat.reverse();

console.log(koirat)

for (let koira of koirat){ //(let i = 0; i < koirat.length; i++)

  document.getElementById('target').innerHTML += `<li>${koira}</li>`
}


