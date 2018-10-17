// Safety check - make sure we have jQuery loaded in one form or another
window.jQuery || document.write('<script src="./js/jquery.js"></script>');



// Defined Constants 
const HUES = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink', 'monochrome']; 
const LUMINOSITIES = ['bright', 'light', 'dark']; 

const MIN_COUNT = 1; 
const INITIAL_COUNT = 3; // Start with a default count of 3
const MAX_COUNT = 10; 



// jQuery IDs 
const QUANTITY_DISPLAY = '#quantity-display'; 


// Tracking Variables 
let quantity = INITIAL_COUNT; 



// Function Definitions 
function init() { 
    console.log("TODO: Initialize Page"); 
}

function getRandomHue() { 
    let randomIndex = Math.floor(Math.random() * HUES.length);
    return HUES[randomIndex]; 
}

function getRandomLuminosity() { 
    let randomIndex = Math.floor(Math.random() * LUMINOSITIES.length); 
    return LUMINOSITIES[randomIndex]; 
}

function updateCounterDisplay() { 
    $(QUANTITY_DISPLAY).text(quantity); 
}

function incrementCounter() { 
    quantity = (quantity + 1) > MAX_COUNT ? MAX_COUNT : quantity + 1; 
    updateCounterDisplay(); 
}

function decrementCounter() { 
    quantity = (quantity - 1) < MIN_COUNT ? MIN_COUNT : quantity - 1; 
    updateCounterDisplay(); 
}

// Interactivity 
init(); 

$('#submit-button').click(function(event) {
    event.preventDefault(); 
    console.log("BOOP"); 
}); 

$("#more-button").click(incrementCounter); 
$("#less-button").click(decrementCounter); 

