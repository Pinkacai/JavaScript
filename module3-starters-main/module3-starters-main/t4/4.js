'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

let options = document.querySelector("#target")
for (let i of students) {
  const n = document.createElement("option")
  n.textContent = i.name.toString()
  n.value = i.id
  options.appendChild(n)
}