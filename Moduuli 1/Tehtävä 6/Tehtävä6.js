'use strict';

let root = confirm('Would you like me to calculate a square root? ');

if (root === true) {
  let root_num = parseInt(
      prompt('Please enter the number you wish to see the root of. '));
  if (root_num < 0) {
    document.querySelector(
        '#Root').innerHTML = 'The square root of a negative number is not defined';
    document.querySelector('#Root').style.fontSize = 'xxx-large';
  }
  if (root_num > 0) {
    let root_calc = Math.sqrt(root_num);
    document.querySelector('#Root').innerHTML = 'The square root of ' +
        root_num + ' is ' + root_calc;
    document.querySelector('#Root').style.fontSize = 'xxx-large';
  }
} else {
  document.querySelector(
      '#Root').innerHTML = 'The root will not be calculated. Thanks a lot...';
  document.querySelector('#Root').style.fontSize = 'xxx-large';
}



