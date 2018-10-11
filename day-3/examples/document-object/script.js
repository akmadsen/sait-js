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



console.log("\n\nEXAMPLE: Style");
function applyRedStyle(htmlElement) {
    htmlElement.style.color = "red";
    htmlElement.style.fontWeight = "bold";
    htmlElement.style.border = "2px solid red";
    htmlElement.style.backgroundColor = "salmon";
}

let item = document.getElementsByClassName('nav-item')[2];
applyRedStyle(item); 
applyRedStyle(listElements[1]); 



console.log("\n\nEXAMPLE: Inner HTML");
header = document.querySelector('#header'); 
let footer = document.querySelector('#footer'); 

header.innerHTML += "<a href=\"#\">Sneaky Sneaky</a>"; 
footer.innerHTML = "<p>MWA HA HA HA! I AM IN CHARGE NOW!</p>"; 



console.log("\n\nEXAMPLE: Element Creation");
let newParagraph = document.createElement('p'); 
let paragraphText = document.createTextNode("Hello!"); 
newParagraph.appendChild(paragraphText); 

let main = document.querySelector("#main"); 
main.appendChild(newParagraph); 