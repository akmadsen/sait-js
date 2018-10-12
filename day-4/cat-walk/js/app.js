let direction = 10;
let vertDirection = 10; 
let units = "px";

// Rotation Stats
let rot = 0; 
let rotStep = 5; 
let rotUnit = "deg"; 

let img = document.getElementById('cat');

// Initialize Values
let currentLeft = parseInt(img.style.left);
let currentTop = parseInt(img.style.top); 

function catWalk() {
    currentLeft = parseInt(img.style.left);
    let leftBound = window.innerWidth - img.width; 
  
    currentTop = parseInt(img.style.top); 
    let topBound = window.innerHeight - img.height; 

    if ((currentLeft > leftBound && direction > 0) || (currentLeft < 0 && direction < 0)) {
        direction *= -1;
    }

    if ((currentTop > topBound && vertDirection > 0) || (currentTop < 0 && vertDirection < 0)) { 
        vertDirection *= -1; 
    }

    img.style.left = (currentLeft + direction + units);
    img.style.top = (currentTop + vertDirection + units);
    
    img.style.transform = "rotate(" + rot + rotUnit + ")"; 
    rot = (rot + rotStep) % 360; 
}

setInterval(catWalk, 50);