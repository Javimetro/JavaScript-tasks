'use strict';
let heittaa
let sides = parseInt(prompt('How many sides in your dice?: '))
function noppa () {
  heittaa = Math.floor(Math.random() * sides + 1);
  document.querySelector('#target').innerHTML += `<ul>${heittaa}</ul>`;
}

do {
  noppa()
} while (heittaa !== sides);