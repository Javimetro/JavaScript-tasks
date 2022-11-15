'use strict';
let heittaa
function noppa () {
  heittaa = Math.floor(Math.random() * 6 + 1);
  document.querySelector('#target').innerHTML += `<ul>${heittaa}</ul>`;
}

do {
  noppa()
} while (heittaa !== 6);

