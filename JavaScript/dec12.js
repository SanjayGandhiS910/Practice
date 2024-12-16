
const obj = {
    firstname:"Sanjay",
    lastname:"Gandhi",
    age:"23"
};

const arr = Object.values(obj);

document.getElementById("object").innerHTML = arr;     

let obj1 = {
    name:"Sanjay Gandhi",
    inti:" S",
    fname:function(){
        return this.name + this.inti;
    }
};
console.log(obj1.fname());


function demo(fname,lname,age){
    this.firstname=fname;
    this.lastname=lname;
    this.age=age;
    this.fullname = function(){
        return this.firstname + " " + this.lastname
    }
}

const me = new demo("Sanjay","Gandhi",23);
const arr1 = JSON.stringify(me);

console.log(arr1);

let b = me.fullname();
console.log(b)

let c = "Hello world, welcome to the universe.";

console.log(c.charAt(10));

console.log(c.at(10));

let arr2 = c.split(" ");
console.log(arr2[2])

let d = c.replace("Hello","Hi")
console.log(d)

let e = "Bo";
console.log(e.padEnd(10,"S"))

let f = 
`Hello world, 
welcome to the 
universe.`;

console.log(f)


// String Templates

let s = "Learning";
let arrS = ["HTML","CSS","JavaScript"];

let html = `<h2>${s}</h2><ul>`
for(let i of arrS){
    html += `<li>${i}</li>`;
};
html += `</ul>`;

document.getElementById("unorderlist").innerHTML = html;

// Arrray

const g = []
g["name"]="Sanjay";
console.log(g.length)

g.push("Sanjay");
g.shift(45);