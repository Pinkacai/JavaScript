'use strict';

let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let button = document.getElementById('start');
let operation = document.getElementById("operation")
let result = document.getElementById("result")




function add(a,b) {
  return a + b;
}

function sub(a,b) {
  return a - b;
}

function multi(a,b) {
  return a * b;
}

function div(a,b) {
  return a / b;
}



button.addEventListener('click', function(){
  let val1 = parseFloat(num1.value)
  let val2 = parseFloat(num2.value)
  let operationChoice = operation.value
  let results;
  if (operationChoice === "add"){
    results = add(val1,val2)
    result.textContent = "Result: " + results
  }
  if (operationChoice === "sub"){
    results = sub(val1,val2)
    result.textContent = "Result: " + results
  }
  if (operationChoice === "multi"){
   results = multi(val1,val2)
    result.textContent = "Result: " + results
  }
  if (operationChoice === "div"){
    results = div(val1,val2)
    result.textContent = "Result: " + results}
})

