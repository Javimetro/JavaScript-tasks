'use strict';

const target = document.querySelector('#target');

const myList = ["First element", "Second element", "Third element"];

for (let item of myList) {
  let newList = document.createElement('li');
  newList.textContent = item;
  target.appendChild(newList);
}