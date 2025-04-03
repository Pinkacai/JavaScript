'use strict';

const throws = parseInt(prompt("How many dice would you like to throw?"))
const sum_num = parseInt(prompt("Which number are you interested in finding out the probability of the dice throwing said number?"))


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const num = getRandomInt(6);


let prob = 0
for (let start = 1; start < throws; start++) {
  if (num === sum_num){
    prob++
  }
}

const prob_calc = (prob * 100)/throws


document.querySelector("#sum").innerHTML = "The probability of throwing a " + sum_num + " with " + throws + " throws, is " + prob_calc