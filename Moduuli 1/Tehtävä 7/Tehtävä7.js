'use strict';

let amt_rolls = parseInt(prompt('How many dice would you like to roll?'));

function getRandomInt(max) {
  return Math.floor(Math.random() * max) + 1;
}

let start = 0;
let sum = 0;

while (start < amt_rolls) {
  let dice_roll = getRandomInt(6);
  sum += dice_roll;
  start++;
}

document.querySelector(
    '#Dice').innerHTML = 'The sum of the dice you threw is ' + sum;

