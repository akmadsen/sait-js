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

listElements = document.querySelectorAll(".nav-item"); 
console.log(listElements); 


console.log("\n\nEXAMPLE: First Element");
let firstElement = document.querySelector('p'); 
console.log(firstElement); 

firstElement = document.querySelector('#header'); 
console.log(firstElement); 


console.log("\n\nEXAMPLE: Collection Notation");
listElements = document.querySelectorAll('p'); 
console.log(listElements[1]); 
console.log(listElements[3]); 


console.log("\n\nEXAMPLE: Modifying Attributes");
let image = document.querySelector('img'); 
image.src = "http://www.placepuppy.net/500/600?random"; 
console.log(image); 

image.setAttribute('src', 'https://placekitten.com/500/600?random'); 
console.log(image); 