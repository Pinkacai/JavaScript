'use strict';

let dice_rolls = [];

function dice() {
  return Math.floor(Math.random() * 6) + 1;
}

while (!(dice_rolls.includes(6))) {
  dice_rolls.push(dice());
}

const html_list = document.querySelector('#dice');

for (let i = 0; i < dice_rolls.length; i++) {
  html_list.innerHTML += `<li> ${dice_rolls[i]}</li>`;
}
document.querySelector('#dice').style.fontSize = 'xx-large';