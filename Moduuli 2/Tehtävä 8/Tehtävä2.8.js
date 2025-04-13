'use strict';

let strings = ["Goober","Shoeman","Catboy","Henry8th"]

function concat(strings){
  return (strings[0] + strings[1] + strings[2] + strings[3])
}

document.querySelector("#concat").innerHTML = concat(strings)
document.querySelector("#concat").style.fontSize = 'xx-large' ;
