document.write("<br> Sanjay Gandhi S")

var a = "name";
var a;
console.log(a);

let b = "Sanjay";
// let b;   --> it is an error
console.log(b);


//Hositing

c = 10;
var c;
console.log(c);


// Data-Types

let text = "Sanjay";
let number = 10;
let boolean = true;
// let undefind;
let null_value = null; 
let arr = [ 1 , "Sanjay" , null , 21.3];
let obj = { fname : "Sanjay" , lname : "Gandhi" , age : 23};
d = undefined;

console.log(typeof(d));


// Object

const obj1 = {
    name : "Sanjay",
    age : 23
};

const arr1 = Object.values(obj1);

document.getElementById("object1").innerHTML = arr1;



