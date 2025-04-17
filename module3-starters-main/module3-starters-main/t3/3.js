'use strict';
const names = ['John', 'Paul', 'Jones'];
const list = document.querySelector("#target")

let named = ''
for (let i of names) {
  named += `<li>${i}</li>`
}
list.innerHTML = named