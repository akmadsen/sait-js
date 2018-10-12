let walkForwards = true;
let direction = 10;
let units = "px";

let img = document.getElementById('cat');
let currentLeft = parseInt(img.style.left);

function catWalk() {
    currentLeft = parseInt(img.style.left);
    let leftBound = window.innerWidth - img.width; 
    
    if ((currentLeft > leftBound) || (currentLeft < 0)) {
        direction *= -1;
    }

    img.style.left = (currentLeft + direction + units);
}

setInterval(catWalk, 50);