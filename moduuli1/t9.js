'use estrict';


const luku = parseInt(prompt('Anna kokolaisluvun: '));

if (luku === 1) {
  text = 'ei ole alkuluku';
} else if (luku === 2) {
  text = 'tämä on alkuluku';
} else {
  for (let i = 2; i < luku; i++) {
    if (luku % i === 0) {
      text = 'Ei ole alkuluku';
      break
    } else {
      text = 'Tämä luku on alkuluku';
    }
  }
}

document.querySelector('#target').innerHTML = text;
