'use strict';
alert("Please enter a year, and I will tell you if it is a leap year!")
const year = parseInt(prompt("Which year would you like to check? "))



let d_4 = year%4
let d_100 = year%100 === 0
let d_400 = year%400 === 0

if (d_4 === 0 && d_100 === d_400 ) {
  document.querySelector("#Leap").innerHTML = "The year " + year + " is a leap year"
  document.querySelector('#Leap').style.fontSize = 'xxx-large';
} else {
  document.querySelector("#Leap").innerHTML = "The year " + year + " is not a leap year"
  document.querySelector('#Leap').style.fontSize = 'xxx-large';
}


