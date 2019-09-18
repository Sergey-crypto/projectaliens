'use strict';
let man = {
    age: 33,
    name: "John",
    isMarried: false
}
console.log(man.name);
document.write(man["isMarried"]);

let arr = ['panel.png', 'graph.jpg', 'read.bmp', 'oil.jpeg'];
console.log(arr[0]);

let question = confirm("Are you here?");
console.log(question);

let isCheked = true,
    isClose  = false;
    console.log(isCheked && !isClose);
    
    console.log("2"===2);
