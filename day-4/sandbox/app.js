let square = document.getElementById("box");

square.style.position = "absolute";
square.style.top = "100px";
square.style.left = "100px";


// Timer Example 
function doThisLater() {
    alert("Time's Up!");
}

// // TIEN'S IDEA 
// function laughter() { 
//     document.write("ha "); 
//     setTimeout(laughter, 500); 
//     setTimeout(laughter, 500); 
// }
// setTimeout(laughter, 500); 

let timerId = setTimeout(doThisLater, 3000); 
clearTimeout(timerId); 

// Interval Example

let timeBox = document.getElementById('time'); 
timeBox.innerHTML = new Date(); 

function updateTime() { 
    timeBox.innerHTML = new Date(); 
}

let intervalTimer = setInterval(updateTime, 1000); 

// Button Example

function sayHi(event) { 
    alert("Hi!"); 
    console.log(event); 

    let current = event.currentTarget; 
    current.style.backgroundColor = "darkolivegreen"; 
    current.innerHTML = "GOTCHA!"; 
}

// JS Caller Example 
box.addEventListener('mouseover', sayHi); 

// Prevent Default Example 
let link = document.getElementById("sait-link"); 
link.addEventListener("click", function(event) { 
    event.preventDefault(); 
    console.log(event); 
    alert("Gotcha!"); 
});