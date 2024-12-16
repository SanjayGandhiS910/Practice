let a = "'`Sanjay`";
document.getElementById("para1").innerHTML = a;

const b = "10";
console.log(typeof Number.parseFloat(b));

const obj = {
    name : "Sanjay",
    age : 23,
    cars : [
        {name:"Audi",models:["R6","R8"]},
        {name:"BMW",models:["z7","z6"]}
    ]
}
let x = "";
for(let i in obj.cars){
    x += `<p> ${obj.cars[i].name} </p>`;
    for(let j in obj.cars[i].models){
        x += obj.cars[i].models[j] + "<br>";
    }
}
document.getElementById("para2").innerHTML = x;

// Array

let c = ["sanjay",18,null,45.0]
document.getElementById("para3").innerHTML = c.toString();

// Array Methods

let d = ["Sanjay",7,"luffy",0.556]
document.getElementById("para4").innerHTML = d.join(" / ")

let e = [6,4,8,2,9,3,1,7,5,10];
e.sort(function(a,b){return a-b});
document.getElementById("Para1").innerHTML = e;

let g = Math.random()
console.log(g);

let h = [6,4,8,2,,9,3,1,7,5,,10]
let i = h.map((v,i)=>{
    console.log(i+" => "+v*2);
    return v*10
});
console.log(i)

let j = [6,4,8,2,,9,3,1,7,5,,10]
let k = j.map((num)=>(num%2==0 ? 2 : 0));
let l = j.keys();
// for(i of l){
//     console.log(i);
// }
console.log(k)
console.log(k.length);

let m = j.with(4,11);
console.log(m)

let date = new Date(24,12,18);
console.log(date);





