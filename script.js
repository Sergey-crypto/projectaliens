'use strict';
/*let man = {
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
    
    console.log("2"==2);*/

    

    if(num<20) {
        console.log("Неверно!");
    } else {
        console.log("Верно!");
    }

    (num=65) ? console.log("Верно!") : console.log("Неверно!");

    switch(num) {
        case num<32: 
            console.log("Неверно!")
            break;
        case 65:
            console.log("Верно!");
            break;
        default:
            console.log("Проверьте условие!");
            break;
    }
    
    // while (num<70) {
    //     console.log(num);
    //     num++;
    // }
    //let num = 65;
     do {
         console.log(num);
         num++;
     }
     while(num<70);

for(let i = 1; i<8; i++){
    if(i == 6) {
        break;
    }
     console.log(i);
    }
   let a=3,
    c=3,
    d=7,
    b=9;
function  Average(){
    result = ((a+b+c+d)/4);
    return result;
    
}
console.log(Average());


let calc = (a,b) => a+b;
console.log(calc(8,15));

function person(){
    let gor =50;
    return gor;
}
let anotherNum = person();
console.log(anotherNum);


function first(land, callback) {
  setTimeout( function(){
        console.log(land),500
    })
    callback();
}
function legal(){
    console.log(1);
}
first(0, legal);
function secondary(){
    console.log(1);

}
first();
secondary();


let squere = {
    width: 1024,
    height: 1024,
    bool: false,
};
delete squere.height;
squere.name = "Java";
if(squere.height == undefined){
    delete squere.weidth;
    console.log("Задайте размеры квадрата размеры квадрата");
    
}
console.log(squere.height);
squere.color = {
    border: "green",
    bg: "yellow",
};

console.log(squere);


for(let key in squere){
    console.log("Параметр объекта" + key + " имеет знаение " +squere[key]);
}
console.log(Object.keys(squere).length);


let arr = [65,213,12454,145,78698,2435];
    arr.shift();
    arr.pop();
    arr.unshift("First")
    arr.push("Last");
    ans = arr.length;
    console.log(ans);
    console.log(arr);

arr.forEach(function(item, i, mass){
    console.log(i+" : " + item + " (значение массива: " + mass+ ')');
})

for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

let mass = [1, 2, 3, 4, 5, 6, 70]

for(let key of mass){
    console.log(key);
}

let answ = prompt('', '');
    arr = [];
    arr = answ.split(',')

console.log(arr);

let str = [24, 34, 23, 23, 54, 64,];
     arw = str.sort(function(a,b){
         return a-b;
     })
    
console.log(arw);