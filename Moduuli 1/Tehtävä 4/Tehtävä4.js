'use strict';

const name = prompt('Please input your name! ');

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const num = getRandomInt(4);

let house = ('house');

if (num === 0) {
  house = 'Ravenclaw';
} else if (num === 1) {
  house = 'Gryffindor';
} else if (num === 2) {
  house = 'Slytherin';
} else if (num === 3) {
  house = 'Hufflepuff';
}

'use strict';
document.querySelector('#target').innerHTML = name + ', you belong to ' +
    house + '.';
document.querySelector('#target').style.fontSize = 'x-large';