'use strict';

let num1 = parseInt(prompt('Please input a number. '));
let num2 = parseInt(prompt('Please input another number. '));
let num3 = parseInt(prompt('Please input one final number. '));

const sum = num1 + num2 + num3;
const mult = num1 * num2 * num3;
const avr = sum / 3;
'use strict';

document.querySelector(
    '#Sum').innerHTML = 'The sum of the numbers you entered is: ' + sum + '.';
document.querySelector('#Sum').style.fontSize = 'x-large';

document.querySelector(
    '#Mult').innerHTML = 'The sum of the multiplication of the numbers you entered is: ' +
    mult + '.';
document.querySelector('#Mult').style.fontSize = 'x-large';

document.querySelector(
    '#Avr').innerHTML = 'The sum of the average of the numbers you entered is: ' +
    avr + '.';
document.querySelector('#Avr').style.fontSize = 'x-large';