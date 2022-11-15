'use strict';
 // for loopi ylhäältä alaspäin. while tai for ja i++

const array = []

let lkm = parseInt(prompt('Kuinka monta osallistuja?: '))
for (let i = 1; i <= lkm; i++){
  let osallistuja = prompt('Kirjoita osallistujan nimen: ')
  array.push(osallistuja)
}
console.log(array.sort())

document.querySelector('#target').innerHTML += `<ol>${array.sort()}</ol>`
