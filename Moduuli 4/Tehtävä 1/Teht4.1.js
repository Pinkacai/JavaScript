'use strict'

let show = document.querySelector("#some")
let box = document.querySelector("#sr")
let name;

box.addEventListener('click',  function(evt){
    name = document.querySelector("#query").textContent
    console.log(name.value)
})
