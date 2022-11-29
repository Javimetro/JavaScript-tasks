'use strict';
const trigger = document.querySelector('#trigger');
const kuva = document.querySelector('#target');
//muutta kuvan
trigger.addEventListener('mouseover',function (evt){
  kuva.src = 'img/picB.jpg';
});
//takaisin A kuva kun hiiri lähtee.
trigger.addEventListener('mouseout',function (evt){
  kuva.src = 'img/picA.jpg';
});