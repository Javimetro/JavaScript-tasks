'use strict';


const target = document.querySelector('#target');

const names = ['John', 'Paul', 'Jones'];

for (let name of names) {
  let newList = document.createElement('li');
  newList.textContent = name;
  target.appendChild(newList);
}
