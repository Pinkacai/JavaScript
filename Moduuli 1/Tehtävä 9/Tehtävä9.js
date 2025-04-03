'use strict';

const prime = parseInt(
    prompt('Please enter a number, and I\'ll tell you if it\'s a prime. '));

let is = true;
for (let start = 2; start < prime; start++) {
  if (prime % start === 0) {
    is = false;
    break;
  }
}

if (is) {
  document.querySelector('#Prime').innerHTML = prime + ' is a prime number';
  document.querySelector('#Prime').style.fontSize = 'xxx-large';
} else {
  document.querySelector('#Prime').innerHTML = prime + ' is not a prime number';
  document.querySelector('#Prime').style.fontSize = 'xxx-large';
}
