'use strict';

let start_year = parseInt(prompt('Please enter the first year.'));
let end_year = parseInt(prompt('Please enter the last year.'));

let start = start_year;
const end = end_year;

const html_list = document.querySelector('#leapYearsList');

while (start <= end) {
  let d_4 = start % 4;
  let d_100 = start % 100 === 0;
  let d_400 = start % 400 === 0;
  if ((d_4 === 0 && d_100 === d_400)) {
    html_list.innerHTML += `<li> ${start}</li>`;
  }
  start++;
}
