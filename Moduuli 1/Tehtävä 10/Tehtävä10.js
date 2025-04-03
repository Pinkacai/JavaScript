'use strict';

const throws = parseInt(prompt('How many dice would you like to throw?'));
const sum_num = parseInt(prompt(
    'Which sum are you interested in finding out the probability of the dice throwing?'));

function getRandomInt(max) {
  return Math.floor(Math.random() * max) + 1;
}

let prob = 0;
let repetitions = 100000
let succesfulthrows = 0;

while (prob < repetitions) {
  let sum = 0;
  for (let start = 0; start < throws; start++) {
    const num = getRandomInt(6);
    sum += num;
    }
  if (sum === sum_num) {
      succesfulthrows++;
  }
  prob++;
}

const prob_calc = (succesfulthrows * 100.0) / repetitions;

document.querySelector('#sum').innerHTML = 'The probability of throwing a ' +
    sum_num + ' with ' + throws + ' throws, is ' + prob_calc;
document.querySelector('#sum').style.fontSize = 'xxx-large';

document.querySelector("#sum").innerHTML += " as" + succesfulthrows