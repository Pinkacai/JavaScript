'use strict'

const par = document.getElementById("trigger")
let img = document.getElementById("#target")


function changeImage(newSrc) {
    document.querySelector('img').src = newSrc;}

par.addEventListener('mouseover', function(evt){
  changeImage('img/picB.jpg')})
par.addEventListener('mouseleave', function(evt){
   changeImage('img/picA.jpg')})