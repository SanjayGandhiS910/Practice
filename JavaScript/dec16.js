
const getData = function(){
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.open('GET',"https://jsonplaceholder.typicode.com/users");
    xmlhttp.onload = function(){
        const myObj = JSON.parse(xmlhttp.response);
        for(let i in myObj){
            document.getElementById("para").innerHTML += "id : "+ myObj[i].id + "<br>";
        }
    }; 
    xmlhttp.send()
}
const loseData = () => {
    document.getElementById("para").innerHTML = " "
}



const data = () => {
    const xm = new XMLHttpRequest();
    xm.open("GET", "https://jsonplaceholder.typicode.com/albums");
    xm.onload = function() {
    const myObj = JSON.parse(xm.responseText);
    for(let i in myObj){
        document.getElementById("demo").innerHTML += "id : "+ myObj[i].id + "<br>";
    }};
    xm.send();
}

const noData = () => {
    document.getElementById("demo").innerHTML = ""
}

