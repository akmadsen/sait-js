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

// timeBox.style.position = "absolute"; 
// timeBox.style.border = "2px solid black"; 
// timeBox.style.top = "400px"; 
// timeBox.style.right = "100px"; 
// timeBox.style.padding = "10px";

function updateTime() { 
    timeBox.innerHTML = new Date(); 
}

let intervalTimer = setInterval(updateTime, 1000); 