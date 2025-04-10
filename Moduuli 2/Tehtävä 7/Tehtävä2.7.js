'use strict';

let dice_rolls = [];
let sides = parseInt(prompt("How many sides would you like your dice to have?"))


function dice(max) {
  return Math.floor(Math.random() * max) + 1;
}

while (!(dice_rolls.includes(sides))) {
  dice_rolls.push(dice(sides));
}

const html_list = document.querySelector('#dice');

for (let i = 0; i < dice_rolls.length; i++) {
  html_list.innerHTML += `<li> ${dice_rolls[i]}</li>`;
}
document.querySelector('#dice').style.fontSize = 'xx-large';