'use strict';

const name = prompt('Please input your name! ');

document.querySelector('#target').innerHTML = 'Hello, ' + name + '!';
document.querySelector('#target').style.fontSize = 'xxx-large';