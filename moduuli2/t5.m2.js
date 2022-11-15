'use strict';

let numbers = []
let n;

for (let i = 0; i <= numbers.length; i++) {
  n = parseInt(prompt('Anna numeron (Annettu jo numeron lopettaa ja tulosta kaikki): '));
  if (numbers.includes(n) === false) {
    numbers.push(n)
  } else if (numbers.includes(n) === true) {
    break
  }
}
const sortedNumbers = numbers.sort((a, b) => {
  if (a > b) {
    return -1
  } else if (a < b) {
    return 1
  } else {
    return 0
  }
})
console.log(sortedNumbers)