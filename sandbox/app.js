// Find Items 
let box = document.getElementById("box"); 

// Define Functions 
function rotateBox() { 
    box.className = "box rotated"
}

function unRotateBox() { 
    box.className = "box"; 
}

// Hook Up
box.onmouseenter = rotateBox; 
box.onmouseleave = unRotateBox; 
