'use strict';

const list = document.querySelector(("#target"))
const items = ["First item", "Second item", "Third item"]
for (let i of items) {
  const n = document.createElement('li')
  n.textContent = i.toString()
  list.appendChild(n)

}
let element = document.getElementsByTagName("li")[1];
element.setAttribute('class','my-item');
