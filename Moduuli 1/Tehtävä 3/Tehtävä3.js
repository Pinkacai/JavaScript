'use strict';
console.log('I am awake');

let age1 = parseInt(prompt('Please input a number. '));
let age2 = parseInt(prompt('Please input another number. '));
let age3 = parseInt(prompt('Please input one final number. '));

const sum = age1 + age2 + age3;
const mult = age1 * age2 * age3;
const avr= sum / 3;
'use strict';

document.querySelector('#Sum').innerHTML = 'The sum of the numbers you entered is: ' + sum + '.';
document.querySelector('#Sum').style.fontSize = 'x-large';

document.querySelector('#Mult').innerHTML = 'The sum of the multiplication of the numbers you entered is: ' + mult + '.';
document.querySelector('#Mult').style.fontSize = 'x-large';

document.querySelector('#Avr').innerHTML = 'The sum of the average of the numbers you entered is: ' + avr + '.';
document.querySelector('#Avr').style.fontSize = 'x-large';