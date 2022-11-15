'use strict';

const list = []

for (let i = 0; i <= 4; i++) {
  let n = Number(prompt('Write a number: '))
  list.push(n)
}
console.log(list)

for (let i = -3; i <= list.length; i++) {
  console.log(list.pop())
}

