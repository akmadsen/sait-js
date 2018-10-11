console.log("EXAMPLE: Header"); 
let header = document.getElementById("header"); 
console.log(header); 


console.log("\n\nEXAMPLE: List Items"); 
let listItems = document.getElementsByTagName("li"); 
console.log(listItems); 


console.log("\n\nEXAMPLE: Elements by Class"); 
listElements = document.getElementsByClassName("nav-item"); 
console.log(listElements); 


console.log("\n\nEXAMPLE: Elements by Selector All");
listElements = document.querySelectorAll("p"); 
console.log(listElements); 


console.log("\n\nEXAMPLE: First Element");
let firstElement = document.querySelector('p'); 
console.log(firstElement); 